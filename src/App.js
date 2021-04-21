import  React, {Component} from "react";
// import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import {TutorList, TutorShow, TutorCreate, TutorEdit } from "./tutors";
// import { CommentList, CommentShow, CommentCreate, CommentEdit } from "./comments";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";
import CommentIcon from '@material-ui/icons/Comment';
import CustomLoginPage from './CustomLoginPage';

import { firebaseConfig as config } from './FIREBASE_CONFIG';

const options = {
  // logging: true,
  // rootRef: 'root_collection/somedoc'
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends Component {
  render() {
    return (
      <Admin
        // loginPage={CustomLoginPage}
        dataProvider={dataProvider}
        // authProvider={authProvider}
      >
        <Resource
          name="tutors"
          list={TutorList}
          show={TutorShow}
          create={TutorCreate}
          edit={TutorEdit}
        />

      </Admin>
    );
  }
}

export default App;
