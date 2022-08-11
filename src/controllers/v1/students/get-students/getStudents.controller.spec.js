import { jest } from '@jest/globals';
import { mockRequest, mockResponse } from '../../../util/mockInterceptor';
import getStudents from './getStudents.controller';

describe("Get Students Controller Test", () => {

  const req = mockRequest(jest);
  const res = mockResponse(jest);

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return 200', async () => {

    await getStudents(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);
  });
});
