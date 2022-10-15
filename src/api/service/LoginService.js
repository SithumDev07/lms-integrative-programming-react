import apiManager from "../ApiManager";

class LoginService {
  async login(loginInfo) {
    return await apiManager.apiPOST("/login", loginInfo);
  }
}
