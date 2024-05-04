import React from 'react';
import { View, Text, ImageBackground,StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatableText = () => {
  return (
    <ImageBackground 
    source={require('../../assets/images/bag.webp')} 
    style={styles.background}
    resizeMode="cover"
  >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Animatable.Text
      
        animation="zoomIn"
        duration={1500}
        iterationCount="infinite"
        style={{ fontSize:42 , fontWeight: 'bold', color: 'black', fontStyle:'italic', marginTop:450}}
      >
        Coming Soon!
      </Animatable.Text>
    </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
    
    background: {
        opacity:5,
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'red',
    },
  });
  

export default AnimatableText;
