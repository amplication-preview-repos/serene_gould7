import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CategoryOfWorkTitle } from "../categoryOfWork/CategoryOfWorkTitle";

export const WorkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
