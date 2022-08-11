import { jest } from '@jest/globals';
import { createStudent, deleteStudent, getStudent, getStudents, updateStudent } from './v1/students/index';
import { configureRoutes } from './index';

describe("Routing Test", () => {
    let router;

    beforeEach(() => {
        router = {
            post: jest.fn(),
            get: jest.fn(),
            put: jest.fn(),
            delete: jest.fn(),
        }
    });
    
    test('should configure routes on router', () => {
        configureRoutes(router);
        expect(router.put).toHaveBeenCalledWith('/v1/student', createStudent);
        expect(router.delete).toHaveBeenCalledWith('/v1/student/:id', deleteStudent);
        expect(router.get).toHaveBeenCalledWith('/v1/student/:id', getStudent);
        expect(router.get).toHaveBeenCalledWith('/v1/students', getStudents);
        expect(router.post).toHaveBeenCalledWith('/v1/student/:id', updateStudent);
    });
});