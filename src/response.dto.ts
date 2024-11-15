export class ResponseDto<T> {
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
  ): ResponseDto<T> {
    return new ResponseDto("success", message, content);
  }

  static customStatus<T>(
    content: T,
    message: string,
    status: string,
  ): ResponseDto<T> {
    return new ResponseDto(status, message, content);
  }

  static error<T>(message: string, content: T = null): ResponseDto<T> {
    return new ResponseDto("error", message, content);
  }
}
