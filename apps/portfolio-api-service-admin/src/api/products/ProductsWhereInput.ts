import { CategoryOfWorkWhereUniqueInput } from "../categoryOfWork/CategoryOfWorkWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductsWhereInput = {
  categoryOfWork?: CategoryOfWorkWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
