import { StatusCodes } from "http-status-codes";

class TemplateNotFound extends Error {
  public code: number;

  constructor() {
    super();
    this.code = StatusCodes.NOT_FOUND;
    this.message = "Template not found";
  }
}

export { TemplateNotFound };
