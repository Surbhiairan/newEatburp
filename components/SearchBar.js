import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class SearchBar extends React.Component{

    constructor(props){
        super(props)
      }
      
    render() {
        return (
            
               

<View style={{
  paddingLeft:20,
  justifyContent: 'center',
  marginRight: 12,
  marginTop:28,
  marginLeft:12,
// marginBottom:10,
  backgroundColor: '#fff', 
  height: 40, 
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10,
//   borderTopLeftRadius:30, 
//   borderBottomLeftRadius:30,
  borderWidth:1,
  borderColor: '#e1e1e1',
  elevation:5,
  }}>
  <TextInput 
  autoFocus={this.props.autoFocus}
  onFocus={this.props.onPress}
  onChangeText={this.props.onChangeText}
  placeholder='Search'
  underlineColorAndroid='transparent'           //to remove underline in textinput
  style={{
    fontSize: 15,
    textAlign: 'auto',
    color: '#878787',
    
  }}
       
        

      />
</View>


           
        );
    }
}

const styles = {
    container:{
        flex: 1,
    }
}