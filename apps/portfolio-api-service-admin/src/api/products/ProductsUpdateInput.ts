import { CategoryOfWorkWhereUniqueInput } from "../categoryOfWork/CategoryOfWorkWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ProductsUpdateInput = {
  categoryOfWork?: CategoryOfWorkWhereUniqueInput | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  price?: number | null;
};
