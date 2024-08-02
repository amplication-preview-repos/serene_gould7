import { Module } from "@nestjs/common";
import { CategoryOfWorkModuleBase } from "./base/categoryOfWork.module.base";
import { CategoryOfWorkService } from "./categoryOfWork.service";
import { CategoryOfWorkController } from "./categoryOfWork.controller";
import { CategoryOfWorkResolver } from "./categoryOfWork.resolver";

@Module({
  imports: [CategoryOfWorkModuleBase],
  controllers: [CategoryOfWorkController],
  providers: [CategoryOfWorkService, CategoryOfWorkResolver],
  exports: [CategoryOfWorkService],
})
export class CategoryOfWorkModule {}
