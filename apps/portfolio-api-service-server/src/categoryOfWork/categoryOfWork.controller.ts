import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoryOfWorkService } from "./categoryOfWork.service";
import { CategoryOfWorkControllerBase } from "./base/categoryOfWork.controller.base";

@swagger.ApiTags("categoryOfWorks")
@common.Controller("categoryOfWorks")
export class CategoryOfWorkController extends CategoryOfWorkControllerBase {
  constructor(protected readonly service: CategoryOfWorkService) {
    super(service);
  }
}
