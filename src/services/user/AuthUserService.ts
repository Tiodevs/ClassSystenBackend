import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {

        // Verifica se tem um user com o email cadastrado
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Email ou senha incorretos")
        }

        // Ele faz a verificação se a senha criptografada é a mesma enviada pelo user
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email ou senha incorretos")
        }

        // Gera um token JWT, armazena o nome e email do user
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token
        }
    }
}

export { AuthUserService }