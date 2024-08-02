import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CategoryOfWorkTitle } from "../categoryOfWork/CategoryOfWorkTitle";

export const WorkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="categoryOfWork.id"
          reference="CategoryOfWork"
          label="CategoryOfWork"
        >
          <SelectInput optionText={CategoryOfWorkTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
        <div />
        <TextInput label="Title" source="title" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
