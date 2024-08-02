import { CategoryOfWorkWhereUniqueInput } from "../categoryOfWork/CategoryOfWorkWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type WorkCreateInput = {
  categoryOfWork?: CategoryOfWorkWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  image?: InputJsonValue;
  title?: string | null;
  url?: string | null;
};
