import React from 'react';
import {Text,View,TextInput} from 'react-native'

const Input = ({value,onChangeText,label,placeHolder,secureTextEntry}) => {
const {inputStyle,labelStyle,containerStyle} = styles

  return(
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
        <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeHolder}
        autoCorrect={false}
        style={inputStyle}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
  );
}

const styles={
  inputStyle:{
    color:'#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23,
    flex:2
    // borderColor:'#888',
    // borderWidth:1
  },
  labelStyle:{
    paddingLeft:20,
    fontSize:18,
    flex:1
  },
  containerStyle:{
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
}

export {Input};
