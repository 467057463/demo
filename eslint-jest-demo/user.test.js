// users.test.js
import axios from 'axios';
import Users from './src/user';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{
    name: 'bob',
  }];

  const resp = {
    data: users,
  };

  axios.get.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual(users))
})
