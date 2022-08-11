import { getStudents, setStudents } from './studentUtil';

describe("Student Util Test", () => {

    test('should return a student list', () => {
        let getStudentList = getStudents();
        expect(Array.isArray(getStudentList)).toBe(true);
    });

    test('should write a student list', () => {
        let getStudentList = getStudents();
        let studentList = getStudentList;
        expect(setStudents(getStudentList)).toBe(undefined);
        setStudents(new Array());
        expect(getStudents()).not.toEqual(studentList);
    });
});