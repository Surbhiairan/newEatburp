import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import SearchBar from './components/SearchBar';
import HomeScreenBubble from './components/HomeScreenBubble';

export default class App extends React.Component {

  _handlePress() {
    console.log('search pressed');
    
  };

  render() {
    return (
      
        <ImageBackground
          source={require('./BG.jpg')}  
          style={styles.backgroundImage}>
        
        <SearchBar />

        <TouchableOpacity style={ styles.bubbleCitySpecial }>
          <Image 
          style={ styles.image } 
          source={require('./cutlery.png')}  
          />
        </TouchableOpacity> 

        <TouchableOpacity style={ styles.bubbleSurpriseMe }>
          <Image 
          style={ styles.image } 
          source={require('./van.png')}  
          />
        </TouchableOpacity> 

        <TouchableOpacity style={ styles.bubbleLatest }>
          <Image 
          style={ styles.image } 
          source={require('./pizza.png')}  
          />
        </TouchableOpacity> 

        <TouchableOpacity style={ styles.bubbleDrinks }>
          <Image 
          style={ styles.image } 
          source={require('./ice-cream.png')}  
          />
        </TouchableOpacity> 

        <TouchableOpacity style={ styles.bubbleBeverages }>
          <Image 
          style={ styles.image } 
          source={require('./noodles.png')}  
          />
        </TouchableOpacity> 

        <TouchableOpacity style={ styles.bubblePocketFriendly }>
          <Image 
          style={ styles.image } 
          source={require('./coffee.png')}  
          />
        </TouchableOpacity> 
        {/* <HomeScreenBubble style={styles.bubbleCitySpecial} 
          onPress={() => this._handlePress()}/>

        <HomeScreenBubble style={styles.bubbleLatest}/>
        <HomeScreenBubble style={styles.bubbleSurpriseMe}/>
        <HomeScreenBubble style={styles.bubbleDesserts}/>
        <HomeScreenBubble style={styles.bubbleDrinks}/> */}

        </ImageBackground>
     
    );
  }
}

const styles = StyleSheet.create({
  bubbleCitySpecial:{
    position: 'absolute',
    top: 100,
    left: 120,
    width: 120,
    height: 120,
    
    backgroundColor:'#fff',
    
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:5,
  },
  bubbleSurpriseMe:{
    position: 'absolute',
    top: 200,
    left: 30,
    width: 100,
    height: 100,
    
    backgroundColor:'#fff',
    
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:5,
  },
  bubbleLatest:{
    position: 'absolute',
    top: 220,
    left: 220,
    width: 120,
    height: 120,
    
    backgroundColor:'#fff',
    
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:5,
  },
  bubbleDrinks:{
    position: 'absolute',
    top: 320,
    left: 100,
    width: 120,
    height: 120,
    
    backgroundColor:'#fff',
    
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:5,
  },
  bubbleBeverages:{
    position: 'absolute',
    top: 440,
    left: 20,
    width: 110,
    height: 110,
    
    backgroundColor:'#fff',
    
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:5,
  },
  bubblePocketFriendly:{
    position: 'absolute',
    top: 450,
    left: 210,
    width: 120,
    height: 120,
    
    backgroundColor:'#fff',
    
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{ 
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    
   
  },
  textInputContainer: {
    backgroundColor: '#fff',
   
    justifyContent: 'center',
    alignItems: 'center',
  }
});
