export class ErrorVO {
  public title: string;
  public text: string;
  public rest_description: string;
  constructor(title: string, text: string, rest_description?: string) {
    this.title = title;
    this.text = text;
    this.rest_description = rest_description;
  }
}
