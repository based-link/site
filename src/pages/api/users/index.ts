import { NextApiRequest, NextApiResponse } from "next"
import { formidable } from "formidable"
import { UserIn, userInSchema } from "@/domain/entities/users/requests"
import { z } from "zod"
import { CreateUserUseCase } from "@/domain/use_cases/users"
import { UsersRepository } from "@/infrastructure/repositories/users"
import { User } from "@/domain/entities/users/internal"

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>,
) {
  if (req.method == "POST") {
    const form = formidable({})

    const formData = {}

    form.on("field", (fieldName, fieldValue) => {
      formData[fieldName] = fieldValue
    })

    const [, files] = await form.parse(req)

    let user: UserIn

    try {
      user = userInSchema.parse(formData)
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json(err.issues)
        return
      }

      if (err instanceof Error) {
        res.status(500).json(err.message)
        return
      }
    }

    const useCase = new CreateUserUseCase(new UsersRepository())
    const createdUser = await useCase.execute(user)

    res.status(200).json(createdUser)
  }
}
