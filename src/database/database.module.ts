import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Global() //global decorator indicates that whatever this module exports is availabe to all the other modules in the repo and they don't need to import it separately
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
