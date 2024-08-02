import { CategoryOfWorkWhereUniqueInput } from "../categoryOfWork/CategoryOfWorkWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ProductsCreateInput = {
  categoryOfWork?: CategoryOfWorkWhereUniqueInput | null;
  description?: string | null;
  image?: InputJsonValue;
  name?: string | null;
  price?: number | null;
};
