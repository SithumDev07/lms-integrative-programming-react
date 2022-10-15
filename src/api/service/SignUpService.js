import apiManager from "../ApiManager";

class SignUpService {
  async register(registerInfo) {
    return await apiManager.apiPOST("/register", registerInfo);
  }
}
