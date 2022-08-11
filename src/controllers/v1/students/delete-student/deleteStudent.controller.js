import httpStatus from 'http-status';
import { getStudents, setStudents } from '../../../util/studentUtil.js';

/**
 * @name deleteStudent
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @description Delete an student
 */
export default async (req, res) => {
    try {
        let students = getStudents();
        let student = students.find(c => c.id === req.params.id);
        if (!student) {
            return res.status(httpStatus.NOT_FOUND).send('Not Found');
        } else {
            let studentIndex = students.indexOf(student);
            students.splice(studentIndex, 1);
            setStudents(students);
            return res.status(httpStatus.OK).json(true);
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            code: httpStatus.INTERNAL_SERVER_ERROR,
            message: error,
        });
    }
}