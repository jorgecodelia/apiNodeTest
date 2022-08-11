import NodeCache from 'node-cache';
import studentsJson from './students.json' assert {type: "json"};

const studentsCache = new NodeCache();

/**
 * @name getStudents
 * @description Get a students list from a node cache
 */
export const getStudents = () => {
    try {
        let exists = studentsCache.has("students");
        if (!exists) {
            initCache();
        };
        return studentsCache.get("students");
    } catch (error) {
        return error;
    };
};

/**
 * @name setStudents
 * @param {object} students - express request object
 * @description Replace the students list from node cache
 */
export const setStudents = (students) => {
    console.log("writing students cache...");
    studentsCache.set("students", students);
};

/**
 * @name initCache
 * @description Init the node cache with a json with students data
 */
const initCache = () => {
    console.log("initializing students cache...");
    studentsCache.set("students", studentsJson);
};