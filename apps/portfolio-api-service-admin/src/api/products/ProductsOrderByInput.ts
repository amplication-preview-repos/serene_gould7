import { SortOrder } from "../../util/SortOrder";

export type ProductsOrderByInput = {
  categoryOfWorkId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
