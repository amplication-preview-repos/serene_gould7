import { CategoryOfWorkWhereUniqueInput } from "../categoryOfWork/CategoryOfWorkWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type WorkWhereInput = {
  categoryOfWork?: CategoryOfWorkWhereUniqueInput;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
