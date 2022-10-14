import apiManager from "../ApiManager";

class UserService {
  async login(loginInfo) {
    return await apiManager.apiPOST("/login", loginInfo);
  }

  async register(registerInfo) {
    return await apiManager.apiPOST("/register", registerInfo);
  }
}

export default new UserService();
