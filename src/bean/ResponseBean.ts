export class ResponseBean<T> {
  status: string;
  message: string;
  content: T;

  constructor(status: string, message: string, content: T) {
    this.status = status;
    this.message = message;
    this.content = content;
  }

  static success<T>(
    content: T,
    message: string = "Success",
  ): ResponseBean<T> {
    return new ResponseBean("success", message, content);
  }

  static customStatus<T>(
    content: T,
    message: string,
    status: string,
  ): ResponseBean<T> {
    return new ResponseBean(status, message, content);
  }

  static error<T>(message: string, content: T = null): ResponseBean<T> {
    return new ResponseBean("error", message, content);
  }
}
