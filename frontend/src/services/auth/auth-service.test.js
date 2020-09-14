import axios from 'axios';

import { authUser } from "./auth-service";

jest.mock('axios')

describe('auth-service', () => {
  it('should fetches successfully user data from an API', async () => {
    const dataResp = {
      token: 'token',
      userId: 'sample',
      message: 'message'
    }

    const dataReq = {
      password: 'pass',
      email: 'email'
    }

    axios.post.mockImplementationOnce(() => Promise.resolve(dataResp));

    await expect(authUser(dataReq)).resolves.toEqual(dataResp);
  })
})
