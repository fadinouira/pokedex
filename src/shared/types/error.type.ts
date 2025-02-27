import { StatusCodesEnum } from '@/app/config';

export class CustomError extends Error {
  status?: StatusCodesEnum;

  constructor(message: string, status?: StatusCodesEnum) {
    super(message);
    this.name = 'CustomError';
    this.status = status ?? StatusCodesEnum.INTERNAL_SERVER_ERROR;
  }
}
