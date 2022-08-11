import httpStatus from 'http-status';
import { getStudents, setStudents } from '../../../util/studentUtil.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * @name createStudent
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @description Create an student
 */
export default async (req, res) => {
    try {
        let students = getStudents();
        let student = {
            id: uuidv4(),
            active: (req.body.active == true),
            email: req.body.email,
            country: req.body.country,
            gender: req.body.gender,
            name: req.body.name,
            age: parseInt(req.body.age)
        };
        students.push(student);
        setStudents(students);
        return res.status(httpStatus.CREATED).json(student);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            code: httpStatus.INTERNAL_SERVER_ERROR,
            message: error,
        });
    }
}