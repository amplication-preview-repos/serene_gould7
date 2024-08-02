import { ProductsUpdateManyWithoutCategoryOfWorksInput } from "./ProductsUpdateManyWithoutCategoryOfWorksInput";
import { WorkUpdateManyWithoutCategoryOfWorksInput } from "./WorkUpdateManyWithoutCategoryOfWorksInput";

export type CategoryOfWorkUpdateInput = {
  description?: string | null;
  name?: string | null;
  productsItems?: ProductsUpdateManyWithoutCategoryOfWorksInput;
  works?: WorkUpdateManyWithoutCategoryOfWorksInput;
};
