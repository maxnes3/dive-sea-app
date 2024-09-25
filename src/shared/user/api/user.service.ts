import axios from 'axios';

class UserService {
  private readonly URL = `${import.meta.env.VITE_SERVER_URL}/users`;
}

const userService = new UserService();
export default userService;
