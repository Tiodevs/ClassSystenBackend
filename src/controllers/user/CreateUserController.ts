import { Request, Response } from "express"
import { CreateUserService } from "../../services/user/CreateUserService"
import { UploadedFile } from 'express-fileupload'
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

export class CreateUserController {
    async handle(req: Request, res: Response) {

        const { name, email, password } = req.body

        const createUserService = new CreateUserService()

        if (!req.files || Object.keys(req.files).length === 0) {
            throw new Error("error upload file image")
        } else {

            // Enviar a imagem para a api docaludnary
            const file:any = req.files['photourl']

            const resultFile: UploadApiResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, function (error, result) {
                    if (error) {
                        reject(error)
                        return
                    }

                    resolve(result)
                }).end(file.data)
            })

            console.log(resultFile)

            const user = await createUserService.execute({
                name,
                email,
                password,
                photourl: resultFile.url
            })
    
            return res.json(user)
        }

    }
}