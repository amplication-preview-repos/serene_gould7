import { CategoryOfWork as TCategoryOfWork } from "../api/categoryOfWork/CategoryOfWork";

export const CATEGORYOFWORK_TITLE_FIELD = "name";

export const CategoryOfWorkTitle = (record: TCategoryOfWork): string => {
  return record.name?.toString() || String(record.id);
};
