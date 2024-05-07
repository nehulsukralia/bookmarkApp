import { ExecutionContext, createParamDecorator } from '@nestjs/common';

// this below is the code template provided by nestjs official docs for creating a  custom param decorator, and we used to create our param decorator GetUser
export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();
    if (data) {
      // means if we pass something as a parameter in the decorator when we call it eg. email
      return request.user[data];
    }
    return request.user;
  },
);
