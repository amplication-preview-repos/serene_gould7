import { Products } from "../products/Products";
import { Work } from "../work/Work";

export type CategoryOfWork = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  productsItems?: Array<Products>;
  updatedAt: Date;
  works?: Array<Work>;
};
