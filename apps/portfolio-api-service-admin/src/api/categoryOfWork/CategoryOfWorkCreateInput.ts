import { ProductsCreateNestedManyWithoutCategoryOfWorksInput } from "./ProductsCreateNestedManyWithoutCategoryOfWorksInput";
import { WorkCreateNestedManyWithoutCategoryOfWorksInput } from "./WorkCreateNestedManyWithoutCategoryOfWorksInput";

export type CategoryOfWorkCreateInput = {
  description?: string | null;
  name?: string | null;
  productsItems?: ProductsCreateNestedManyWithoutCategoryOfWorksInput;
  works?: WorkCreateNestedManyWithoutCategoryOfWorksInput;
};
