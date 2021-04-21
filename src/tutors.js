
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
    { id: 'Central_and_Western', name: '中西區' },
    { id: 'Wan_Chai', name: '灣仔' },
    { id: 'Eastern', name: '東區' },
    { id: 'Southern', name:'南區'},
    { id: 'Yau_Tsim_Mong', name:'油尖旺'},
    { id: 'Sham_Shui_Po', name:'深水埗'},
    { id: 'Kowloon_City', name:'九龍城'},
    { id: 'Wong_Tai_Sin', name:'黃大仙'},
    { id: 'Kwun_Tong', name:'觀塘'},
    { id: 'Kwai_Tsing', name:'葵青'},
    { id: 'Tsuen_Wan', name:'荃灣'},
    { id: 'Tuen_Mun', name:'屯門'},
    { id: 'Yuen_Long', name:'元朗'},
    { id: 'North', name:'北區'},
    { id: 'Tai_Po', name:'大埔'},
    { id: 'Sha_Tin', name:'沙田'},
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
    { id: 'Central_and_Western', name: '中西區' },
    { id: 'Wan_Chai', name: '灣仔' },
    { id: 'Eastern', name: '東區' },
    { id: 'Southern', name:'南區'},
    { id: 'Yau_Tsim_Mong', name:'油尖旺'},
    { id: 'Sham_Shui_Po', name:'深水埗'},
    { id: 'Kowloon_City', name:'九龍城'},
    { id: 'Wong_Tai_Sin', name:'黃大仙'},
    { id: 'Kwun_Tong', name:'觀塘'},
    { id: 'Kwai_Tsing', name:'葵青'},
    { id: 'Tsuen_Wan', name:'荃灣'},
    { id: 'Tuen_Mun', name:'屯門'},
    { id: 'Yuen_Long', name:'元朗'},
    { id: 'North', name:'北區'},
    { id: 'Tai_Po', name:'大埔'},
    { id: 'Sha_Tin', name:'沙田'},
    ]} />

      <NumberInput source="matchCount" />
      <RichTextInput source="introduction" />
    </SimpleForm>
  </Edit>
);
