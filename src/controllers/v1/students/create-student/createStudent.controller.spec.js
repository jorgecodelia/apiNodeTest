import { jest } from '@jest/globals';
import { mockRequest, mockResponse } from '../../../util/mockInterceptor';
import createStudent from "./createStudent.controller";

describe("Create Student Controller Test", () => {

  const req = mockRequest(jest);
  const res = mockResponse(jest);

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return created', async () => {
    let body = {
      "active": true,
      "email": "javiera@student.com",
      "emailVerified": true,
      "country": "CL",
      "gender": "female",
      "name": "javiera",
      "age": 26
    };
    req.body = body;

    await createStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.status).toHaveBeenCalledTimes(1);
  });

  test('should throw Service error', async () => {

    req.body = null;
    await createStudent(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });
});
