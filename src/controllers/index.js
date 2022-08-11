import flags from '../../config/application-default.json' assert {type: "json"};
import { createStudent, deleteStudent, getStudent, getStudents, updateStudent } from './v1/students/index.js'

/**
 * @name configureRoutes
 * @param {object} router - express router object
 * @description Set routes for all controllers
 */
export const configureRoutes = (router) => {
  console.log('configureRoutes...' + router);
  // Students Controllers
  router.put('/v1/student', createStudent);
  if (flags.feature && flags.feature.ffDeleteStudent) {
    router.delete('/v1/student/:id', deleteStudent);
  }

  router.post('/v1/student/:id', updateStudent);
  router.get('/v1/students', getStudents);
  router.get('/v1/student/:id', getStudent);
  return router;
}