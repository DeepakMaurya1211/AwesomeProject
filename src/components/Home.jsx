import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View>
            <Text class>apka swagat hai</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Saree')}
            />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})