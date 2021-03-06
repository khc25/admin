
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  BooleanField,
  ArrayField,
  NumberInput,
  ArrayInput, SimpleFormIterator,
  BooleanInput,
  CheckboxGroupInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

// const TutorFilter = (props) => (
//   <Filter {...props}>
//     <TextInput label="Search" source="name" alwaysOn />
//   </Filter>
// );

export const TutorList = (props) => (
  <List {...props}
  // filters={<TutorFilter />}
  >
    <Datagrid>
    <TextField source="id" />
    <TextField source="phone" />
      <TextField source="name" />
      <TextField source="gender" />
      <TextField source="school" />
      <BooleanField source ="isOnline" />
      // <RichTextField source="introduction" />
      <BooleanField source="isVerified" />

      <ArrayField source="subject">
      <Datagrid>
        <TextField source="subject" />
        <TextField source="price" />
        </Datagrid>
      </ArrayField>

      <TextField source="area" />
      <TextField source="matchCount" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={true}/>
    </Datagrid>
  </List>
);

export const TutorShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="gender" />
      <TextField source="school" />
      <TextField source="phone" />
      <BooleanField source ="isOnline" />
      <RichTextField source="introduction" />
      <BooleanField source="isVerified" />
      <ArrayField source="subject">
      <Datagrid>
        <TextField source="subject" />
        <TextField source="price" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="area">
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        </Datagrid>
      </ArrayField>

      <ArrayField source="grade">
      <Datagrid>
        <TextField source="subject" />
        <TextField source="grade" />
        </Datagrid>
      </ArrayField>
      <TextField source="matchCount" />
    </SimpleShowLayout>
  </Show>
);

export const TutorCreate = (props) => (
  <Create {...props}>
    <SimpleForm>

      <TextInput source="name" />
      <TextInput source="gender" />
      <TextInput source="school" />
      <NumberInput source="phone" />
      <BooleanInput source ="isOnline" />
      <BooleanInput source="isVerified" />
      <ArrayInput source="subject">
      <SimpleFormIterator>
          <TextInput source="subject" />
          <NumberInput source="price" />
          </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="grade">
      <SimpleFormIterator>
          <TextInput source="subject" />
          <TextInput source="grade" />
          </SimpleFormIterator>
      </ArrayInput>
      <CheckboxGroupInput source="area" choices={[
    { id: 'Central_and_Western', name: '?????????' },
    { id: 'Wan_Chai', name: '??????' },
    { id: 'Eastern', name: '??????' },
    { id: 'Southern', name:'??????'},
    { id: 'Yau_Tsim_Mong', name:'?????????'},
    { id: 'Sham_Shui_Po', name:'?????????'},
    { id: 'Kowloon_City', name:'?????????'},
    { id: 'Wong_Tai_Sin', name:'?????????'},
    { id: 'Kwun_Tong', name:'??????'},
    { id: 'Kwai_Tsing', name:'??????'},
    { id: 'Tsuen_Wan', name:'??????'},
    { id: 'Tuen_Mun', name:'??????'},
    { id: 'Yuen_Long', name:'??????'},
    { id: 'North', name:'??????'},
    { id: 'Tai_Po', name:'??????'},
    { id: 'Sha_Tin', name:'??????'},
    ]} />

      <NumberInput source="matchCount" />
      <RichTextInput source="introduction" />

    </SimpleForm>
  </Create>
);

export const TutorEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" options={{ disabled: true }} />
      <TextInput source="name" />
      <TextInput source="gender" />
      <TextInput source="school" />
      <NumberInput source="phone" />
      <BooleanInput source ="isOnline" />
      <BooleanInput source="isVerified" />

      <ArrayInput source="subject">
      <SimpleFormIterator>
          <TextInput source="subject" />
          <NumberInput source="price" />
          </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="grade">
      <SimpleFormIterator>
          <TextInput source="subject" />
          <TextInput source="grade" />
          </SimpleFormIterator>
      </ArrayInput>
      <CheckboxGroupInput source="area" choices={[
    { id: 'Central_and_Western', name: '?????????' },
    { id: 'Wan_Chai', name: '??????' },
    { id: 'Eastern', name: '??????' },
    { id: 'Southern', name:'??????'},
    { id: 'Yau_Tsim_Mong', name:'?????????'},
    { id: 'Sham_Shui_Po', name:'?????????'},
    { id: 'Kowloon_City', name:'?????????'},
    { id: 'Wong_Tai_Sin', name:'?????????'},
    { id: 'Kwun_Tong', name:'??????'},
    { id: 'Kwai_Tsing', name:'??????'},
    { id: 'Tsuen_Wan', name:'??????'},
    { id: 'Tuen_Mun', name:'??????'},
    { id: 'Yuen_Long', name:'??????'},
    { id: 'North', name:'??????'},
    { id: 'Tai_Po', name:'??????'},
    { id: 'Sha_Tin', name:'??????'},
    ]} />

      <NumberInput source="matchCount" />
      <RichTextInput source="introduction" />
    </SimpleForm>
  </Edit>
);
