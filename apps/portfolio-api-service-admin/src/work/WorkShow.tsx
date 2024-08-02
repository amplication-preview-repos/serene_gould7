import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CATEGORYOFWORK_TITLE_FIELD } from "../categoryOfWork/CategoryOfWorkTitle";

export const WorkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="CategoryOfWork"
          source="categoryofwork.id"
          reference="CategoryOfWork"
        >
          <TextField source={CATEGORYOFWORK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
