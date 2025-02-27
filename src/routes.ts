import { Request, Response, Router } from 'express'

// Middlewares
import { isAuthenticated } from './middlewares/isAuthenticated'

// Controllers
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { CreateCourseController } from './controllers/course/CreateCourseController'
import { ListCourseController } from './controllers/course/ListCourseController'
import { CreateUsercoursesController } from './controllers/userCourses/CreateUsercoursesController'
import { ListUsercoursesController } from './controllers/userCourses/ListUsercoursesController'
import { ListbyidUsercoursesController } from './controllers/userCourses/ListbyidUsercoursesController'
import { EditActiveUserController } from './controllers/user/EditActiveUserController'
import { EditActiveCourseController } from './controllers/course/EditActiveCourseController'
import { CreateLessonController } from './controllers/lesson/CreateLessonController'
import { ListLessonController } from './controllers/lesson/ListLessonController'
import { ListbyidLessonController } from './controllers/lesson/ListbyidLessonController'
import { CreateProgressController } from './controllers/progresses/CreateProgressController'
import { ListUserContoller } from './controllers/user/ListeUserController'
import { EditActiveProgressController } from './controllers/progresses/EditActiveCourseController'
import { CreateEventController } from './controllers/events/CreateEventsController'
import { ListEventController } from './controllers/events/ListEventsController'
import { DeleteLessonController } from './controllers/lesson/DeleteLessonController'
import { DeleteEventController } from './controllers/events/DeleteLessonController'
import { DeleteUserCourseController } from './controllers/userCourses/DeleteUserCourseController'
import { CreateUserStreakController } from './controllers/userStreak/CreateUserStreakController'
import { UpdateUserStreakController } from './controllers/userStreak/UpdateUserStreakController'
const router = Router()

// Configuração do envio de arquivos
router.get('/', (req: Request, res: Response) => {
  return res.send(`
    <h1 style='font-family: sans-serif'>
        API ClassSysten!!! 👩‍🏫
    <h1>
  `)
})

// USERS //

// Cria um novo usuario
router.post('/users', new CreateUserController().handle)
// Desativa um usuario
router.post('/users/edit', isAuthenticated, new EditActiveUserController().handle)
// Faz a altenticação de login do usuario
router.post('/login', new AuthUserController().handle)
// Pega os detalhes do usuario logado
router.get('/me', isAuthenticated, new DetailUserController().handle)
// Pega todos os usuarios e seus cursos
router.get('/users', isAuthenticated, new ListUserContoller().handle)


// COURSES //

// Cria um novo curso
router.post('/course', isAuthenticated, new CreateCourseController().handle)
// Oculta um curso existente
router.post('/course/edit', isAuthenticated, new EditActiveCourseController().handle)
//  Lista todos os cursos existentes
router.get('/course', isAuthenticated, new ListCourseController().handle)


//  USERCOURSES //

//  Adiciona um usuario no curso
router.post('/users/course', isAuthenticated, new CreateUsercoursesController().handle)
//  Lista todos os curso por um id especifico
router.post('/users/courseid', isAuthenticated, new ListbyidUsercoursesController().handle)
//  Litsa todas as maticulas
router.get('/users/course', isAuthenticated, new ListUsercoursesController().handle)
//  Deleta o curso do user
router.delete('/users/course', isAuthenticated, new DeleteUserCourseController().handle)


//  LESSON  //

// Criar uma nova lição
router.post('/course/lesson', isAuthenticated, new CreateLessonController().handle)
//  Lista todos os cursos existentes
router.get('/course/lesson', isAuthenticated, new ListLessonController().handle)
//  Lista todos os cursos existentes
router.post('/course/lessonbyid', isAuthenticated, new ListbyidLessonController().handle)
//  Deleta a lissão e todos os progressos dela
router.delete('/course/lesson', isAuthenticated, new DeleteLessonController().handle)


// PROGRESS //

// Criar uma nova lição
router.post('/course/progress', isAuthenticated, new CreateProgressController().handle)
// Desmarcar como completo
router.post('/course/progress/edit', isAuthenticated, new EditActiveProgressController().handle)


// EVENTS //

// Criar um novo evento para user
router.post('/course/events', isAuthenticated, new CreateEventController().handle)
// Lista events byuser
router.post('/course/events/list', isAuthenticated, new ListEventController().handle)
// Delta eventos
router.delete('/course/events', isAuthenticated, new DeleteEventController().handle)


//  USER STREAK //

// Criar um novo streak
router.post('/user/streak', isAuthenticated, new CreateUserStreakController().handle)
// Criar um novo streak
router.put('/user/streak', isAuthenticated, new UpdateUserStreakController().handle)



export { router }