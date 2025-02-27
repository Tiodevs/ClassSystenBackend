import { Response, Request, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
// import prismaClient from '../prisma'

interface Payload {
    name: string
    email: string
    sub: string
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

    // Verifica se receber o token no header de autenticação
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end()
    }

    // Pega so o token

    const [, token] = authToken.split(" ")

    // verifica se o token é válido
    try {
        const { sub } = verify(
            token, 
            process.env.JWT_SECRET
        ) as Payload

        // injetar o id do usuário dentro do request
        // INPORTANTE, tem que criar o type dele sobscrevendo o do express
        req.user_id = sub
        
        // const userActive = prismaClient.user.findFirst({
        //     where:{
        //         id: sub,
        //         active: true
        //     }
        // })

        // console.log(userActive)

        // if(!userActive){
        //     return res.status(403).json({ error: 'Usuario desativado' })
        // }

        return next()

    } catch (error) {
        return res.status(403).json({ error: 'Invalid JWT Token' });
    }

}