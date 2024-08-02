import { SortOrder } from "../../util/SortOrder";

export type WorkOrderByInput = {
  categoryOfWorkId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
