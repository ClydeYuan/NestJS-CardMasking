import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { NameController } from './name/name.controller';
import { NameService } from './name/name.service';

@Module({
  imports: [],
  controllers: [TaskController, NameController],
  providers: [TaskService, NameService],
})
export class AppModule {}
