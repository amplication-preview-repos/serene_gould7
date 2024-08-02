import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductsListRelationFilter } from "../products/ProductsListRelationFilter";
import { WorkListRelationFilter } from "../work/WorkListRelationFilter";

export type CategoryOfWorkWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  productsItems?: ProductsListRelationFilter;
  works?: WorkListRelationFilter;
};
