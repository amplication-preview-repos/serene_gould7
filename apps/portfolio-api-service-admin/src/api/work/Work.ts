import { CategoryOfWork } from "../categoryOfWork/CategoryOfWork";
import { JsonValue } from "type-fest";

export type Work = {
  categoryOfWork?: CategoryOfWork | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  image: JsonValue;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
