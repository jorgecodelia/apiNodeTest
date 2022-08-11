import { jest } from '@jest/globals';
import { mockRequest, mockResponse } from '../../../util/mockInterceptor';
import deleteStudent from './deleteStudent.controller';

describe("Delete Student Controller Test", () => {

  const req = mockRequest(jest);
  const res = mockResponse(jest);

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return 200', async () => {
    req.params.id = "0a659080-7673-46a8-ad8d-b928156499f8";

    await deleteStudent(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);
  });

  test('should return Not Found', async () => {
    req.params.id = null;
    await deleteStudent(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });

  test('should throw Service error', async () => {
    let request = null;
    await deleteStudent(request, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });
});
