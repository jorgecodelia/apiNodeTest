import httpStatus from 'http-status';
import { getStudents, setStudents } from '../../../util/studentUtil.js';

/**
 * @name updateStudent
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @description Update an student
 */
export default async (req, res) => {
    try {
        let students = getStudents();
        let studentId = req.params.id;
        let student = students.find(c => c.id === studentId);
        if (!student) {
            return res.status(httpStatus.NOT_FOUND).send('Not Found');
        } else {
            let studentIndex = students.indexOf(student);
            students.splice(studentIndex, 1);
            let studentReq = {
                id: studentId,
                active: (req.body.active == true),
                email: req.body.email,
                country: req.body.country,
                gender: req.body.gender,
                name: req.body.name,
                age: parseInt(req.body.age)
            };
            students.push(studentReq);
            students.sort((a, b) => a.id - b.id);
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