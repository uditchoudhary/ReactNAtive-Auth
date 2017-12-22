import React, {Component} from 'react';
import { View} from 'react-native';
import firebase from 'firebase';
import { Header,Button ,Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
 state ={loggedIn:null}

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyA68LeSwrlD8tq8FwsUtdWgwnr-PcWc09g',
      authDomain: 'auth-72234.firebaseapp.com',
      databaseURL: 'https://auth-72234.firebaseio.com',
      projectId: 'auth-72234',
      storageBucket: 'auth-72234.appspot.com',
      messagingSenderId: '277555592520'
    });

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({loggedIn:true})
        } else {
          this.setState({loggedIn:false})
        }
    });
  }

renderContent(){
  switch (this.state.loggedIn) {
    case true:
    return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
      case false:
      return <LoginForm/>;
    default:
      return <Spinner size='large'/>;
  }
}
render(){
  return (
    <View>
      <Header headerText="Authentication"/>
{this.renderContent()}
    </View>
  );
}

}

export default App;
