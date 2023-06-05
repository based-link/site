import db from "@/app/db"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const users = await db.users.findMany()
  res.status(200).json({ users })
}
