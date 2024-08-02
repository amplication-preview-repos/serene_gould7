import * as graphql from "@nestjs/graphql";
import { CategoryOfWorkResolverBase } from "./base/categoryOfWork.resolver.base";
import { CategoryOfWork } from "./base/CategoryOfWork";
import { CategoryOfWorkService } from "./categoryOfWork.service";

@graphql.Resolver(() => CategoryOfWork)
export class CategoryOfWorkResolver extends CategoryOfWorkResolverBase {
  constructor(protected readonly service: CategoryOfWorkService) {
    super(service);
  }
}
