import { UserIn } from "../entities/users/requests"
import { User } from "../entities/users/internal"
import { UsersRepository } from "@/infrastructure/repositories/users"

export class CreateUserUseCase {
  usersRepo: UsersRepository

  constructor(usersRepo: UsersRepository) {
    this.usersRepo = usersRepo
  }

  async execute(user: UserIn): Promise<User> {
    return await this.usersRepo.create(user)
  }
}
