import axios from 'axios';
import User from '../types/user.type';

class UserService {
  private readonly URL = `${import.meta.env.VITE_SERVER_URL}/users`;

  getAll() {
    return axios.get<User>(this.URL);
  }
}

const userService = new UserService();
export default userService;
