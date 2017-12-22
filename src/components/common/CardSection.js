import React from 'react';
import { Text, View } from 'react-native';

const CardSection = (props) => {

  return(

      <View style={styles.containerStyle}>
        {props.children}
      </View>

  );

};

const styles = {
  containerStyle:{
    borderColor:'#ddd',
    backgroundColor:'#fff',
    borderBottomWidth:1,
    padding:5,
    position:'relative',
    justifyContent:'flex-start',
    flexDirection:'row'
  }
}

export {CardSection};
