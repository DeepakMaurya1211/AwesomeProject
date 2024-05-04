import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Splash from './src/components/Splash';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './src/components/BottomNavigator';


const Stack = createStackNavigator();

export default function App() {
  const [loading, setloading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Splash />;
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
