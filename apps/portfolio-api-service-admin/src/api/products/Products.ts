import { CategoryOfWork } from "../categoryOfWork/CategoryOfWork";
import { JsonValue } from "type-fest";

export type Products = {
  categoryOfWork?: CategoryOfWork | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
