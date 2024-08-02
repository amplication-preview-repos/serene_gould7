import { CategoryOfWorkWhereInput } from "./CategoryOfWorkWhereInput";
import { CategoryOfWorkOrderByInput } from "./CategoryOfWorkOrderByInput";

export type CategoryOfWorkFindManyArgs = {
  where?: CategoryOfWorkWhereInput;
  orderBy?: Array<CategoryOfWorkOrderByInput>;
  skip?: number;
  take?: number;
};
