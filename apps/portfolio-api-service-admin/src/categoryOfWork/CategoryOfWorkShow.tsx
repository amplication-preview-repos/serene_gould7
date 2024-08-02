import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATEGORYOFWORK_TITLE_FIELD } from "./CategoryOfWorkTitle";

export const CategoryOfWorkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Products"
          target="categoryOfWorkId"
          label="ProductsItems"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CategoryOfWork"
              source="categoryofwork.id"
              reference="CategoryOfWork"
            >
              <TextField source={CATEGORYOFWORK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Name" source="name" />
            <TextField label="Price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Work"
          target="categoryOfWorkId"
          label="Works"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
