export class LoginResponse {
  token: string;
  constructor(token: string, type: string) {
    this.token = token;
  }
}
