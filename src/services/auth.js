import api from "@/config/axios";
import * as ep from "./endpoints";

class AuthService {
  static login(payload) {
    return api.post(ep.LOGIN, payload, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }
}

export default AuthService;
