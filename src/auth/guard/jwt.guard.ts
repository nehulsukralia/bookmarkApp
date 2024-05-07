import { AuthGuard } from '@nestjs/passport';

export class JwtGuard extends AuthGuard('nehulJwt') {
  //above nehulJwt is the name of the reference we specified at the jwt strategy we made'
  constructor() {
    super();
  }
}
