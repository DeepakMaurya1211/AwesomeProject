// App.js

import React, { useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View
                duration={3000}
                style={styles.imageContainer}
            >
                <Animatable.Image
                    animation="zoomInUp"
                    duration={3000}
                    source={require('../../assets/images/logo.png')}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
            <Animatable.Text
                animation="zoomInUp"
                duration={3000}
                style={{
                    color: "#CE8EFC", // Example of using the Dancing Script font
                    fontWeight: "bold", // Example of setting font weight
                    fontSize: 28, // Example of increasing font size to 20
                }}
            >
                Gharana Boutique
            </Animatable.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imageContainer: {
        width: '60%',
        height: '30%',
        // aspectRatio: 1, // Ensure square aspect ratio
        // Tailwind CSS classes:
        // "mx-auto": Set horizontal margin to auto
        // "my-8": Set vertical margin to 8
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default Splash;
