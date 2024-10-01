import prismaClient from "../../prisma";

class EditActiveCourseService {
    async execute({ course_id }: any) {

        // Primeiro, busque o usuário pelo ID
        const course = await prismaClient.course.findUnique({
            where: { id: course_id }
        });

        if (!course) {
            throw new Error('Course not found');
        }

        // Inverta o valor de "active" (se for true, muda para false e vice-versa)
        const updatedCourse = await prismaClient.course.update({
            where: { id: course_id },
            data: {
                active: !course.active
            }
        });

        return updatedCourse;
    }
}

export { EditActiveCourseService }