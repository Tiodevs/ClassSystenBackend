import  prismaClient  from "../../prisma"

interface ItemRequest {
  usercurse_id: string
}

class DeleteUserCurseService {
  async execute({ usercurse_id }: ItemRequest) {

    console.log("chegou aqui")
      
    const userCurse = await prismaClient.userCourse.delete({
      where: {
        id: usercurse_id
      }
    })

    return userCurse
  }
}

export { DeleteUserCurseService }