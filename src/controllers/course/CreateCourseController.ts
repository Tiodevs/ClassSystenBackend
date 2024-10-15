import { Request, Response } from "express"
import { CreateCourseService } from "../../services/course/CreateCourseService"
import { UploadedFile } from 'express-fileupload'
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

export class CreateCourseController {
    async handle(req: Request, res: Response) {

        const { name, description } = req.body
        
        const createCourseService = new CreateCourseService()

        if (!req.files || Object.keys(req.files).length === 0) {
            throw new Error("error upload file image")
        } else {

            // Enviar a imagem para a api docaludnary
            const file:any = req.files['banner']

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

            const course = await createCourseService.execute({
                name,
                description,
                banner: resultFile.url
            })
    
            return res.json(course)
        }
        
    }
  }