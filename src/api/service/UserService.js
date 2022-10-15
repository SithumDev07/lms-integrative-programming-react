import apiManager from "../ApiManager";

class UserService {
  async login(url, loginInfo) {
    return await apiManager.apiPOST(url, loginInfo);
  }

  async register(registerInfo) {
    return await apiManager.apiPOST("/register", registerInfo);
  }

    async getUser(userInfo, config) {
      return await apiManager.apiPOST("/api/v1/user/get", userInfo, config);
  }
}

export default new UserService();
