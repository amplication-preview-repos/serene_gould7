import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CategoryOfWorkTitle } from "../categoryOfWork/CategoryOfWorkTitle";

export const ProductsEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="Description" multiline source="description" />
        <div />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
