import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import Sign from './components/Sign';

export default class App extends React.Component {

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyAxPn-OziVCyktyV5vMF1QXt4GWmjrM1jA",
      authDomain: "todolist-vbg.firebaseapp.com",
      databaseURL: "https://todolist-vbg.firebaseio.com",
      projectId: "todolist-vbg",
      storageBucket: "todolist-vbg.appspot.com",
      messagingSenderId: "866160855243"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Sign user={this.state.user}/> */}
      </View>
    );
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        // localStorage.setItem("user", user.displayName);
        // localStorage.setItem("userID", user.uid);
        // localStorage.setItem("userEmail", user.email);
        // localStorage.setItem("photoUrl", user.photoURL);
      } else {
        this.setState({ user: null });
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
