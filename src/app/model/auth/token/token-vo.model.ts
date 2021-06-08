export class TokenVO {
  name: string;
  token: string;
  type: string;
  constructor(name: string, token: string, type: string) {
    this.name = name;
    this.token = token;
    this.type = type;
  }
}
