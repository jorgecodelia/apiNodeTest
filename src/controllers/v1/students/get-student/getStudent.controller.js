import httpStatus from 'http-status';
import {getStudents} from '../../../util/studentUtil.js';

/**
 * @name getStudent
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @description Get an student
 */
export default async (req, res) => {
    try{
        let students = getStudents();
        let student = students.find(c => c.id === req.params.id);
        if(!student){
            return res.status(httpStatus.NOT_FOUND).send('Not Found');
        } else {
            return res.status(httpStatus.OK).json(student);
        }
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            code: httpStatus.INTERNAL_SERVER_ERROR,
            message: error,
        });
    }
}