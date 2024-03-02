import { User } from "@/domain/entities/users/internal";
import { UserIn } from "@/domain/entities/users/requests";
import prisma from "@/lib"

export class UsersRepository {
    async create(user: UserIn): Promise<User | undefined> {
        return await prisma.user.create({data: {
            username: user.username,
            fullName: user.fullName,
            publicKey: user.publicKey,
            summary: user.summary,
            webSite: user.webSite,
        }})
    }
}