export class HttpAppHeaders {
  headers: {
    [header: string]: string | Array<string>;
  };

  constructor(value?: { [header: string]: string | Array<string> }) {
    this.headers = value || {};
  }

  public add(key, value) {
    this.headers[key] = value;
  }

  public getAll(): {
    [header: string]: string | Array<string>;
  } {
    return this.headers;
  }
}
