import httpStatus from 'http-status';
import {getStudents} from '../../../util/studentUtil.js';

/**
 * @name GetStudents
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @description Get all students
 */
export default async (req, res) => {
    try{
        let students = getStudents();
        return res.status(httpStatus.OK).json(students);
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            code: httpStatus.INTERNAL_SERVER_ERROR,
            message: error,
        });
    }
}