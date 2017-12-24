import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image,
} from 'react-native';

export default class HomeScreenBubble extends React.Component{

    constructor(props){
        super(props)
      }
      
    render() {
        return (
            
               



<TouchableHighlight onPress={this.props.onPress} >
    <Image 
    style={ styles.image } 
    source={require('../coffee.png')}  
    />
</TouchableHighlight> 

  



           
        );
    }
}

const styles = {
    container:{
        flex: 1,
    },
    imageContainer: {
        backgroundColor:'#fff',
        height:100,
        width: 100,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:5,
      },
      image: {
        height:60,
        width: 60,
        borderRadius: 64
      },
}