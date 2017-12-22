import React, {Component} from 'react';
import {Button,Card,CardSection,Header,Input,Spinner} from './common';
import firebase from 'firebase';
import {Text} from 'react-native';



class LoginForm extends Component{
state = {email: '',
        password: '',
      error: '',
    loading: false};

onButtonPress(){
  const {email,password}= this.state

  this.setState({error: '',loading: true});

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then(this.onLoginSuccess.bind(this))
  .catch(()=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFailure.bind(this));
  });
}
onLoginSuccess(){
  this.setState({
    email: '',
    password: '',
    error: '',
    loading: false
  })
}
onLoginFailure(){
  this.setState({error: 'AuthenticationFailed',loading:false});

}

renderButton(){
  if(this.state.loading){
    return <Spinner size="small"/>;
  }
  return(
    <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
  );
}
  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label='Email'
            placeHolder='Enter email address'
            value={this.state.email}
              onChangeText={email => this.setState({email})}
            />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            placeHolder='Enter password'
            label='Password'
            value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
        </CardSection>
<Text style={styles.errorStyle}>{this.state.error}</Text>
        <CardSection>
            {this.renderButton()}
        </CardSection>
      </Card>
    );
  }

}


const styles={
  errorStyle:{
    fontSize: 20,
    alignSelf:'center',
    color:'red'
  }
}

export default LoginForm;
