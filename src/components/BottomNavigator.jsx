import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native'; // Import useIsFocused hook
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Saree from './Saree';
import Jwellery from './Jwellery';
import TodeBags from './TodeBags';
import Kurti from './Kurti';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const isFocused = useIsFocused();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white', paddingBottom: 4
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <HomeIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }
                })}
            />
            <Tab.Screen
                name="Saree"
                component={Saree}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <SareeIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }
                })}
            />
            <Tab.Screen
                name="Jwellery"
                component={Jwellery}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <JwelleryIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }

                })}
            />
            <Tab.Screen
                name="TodeBags"
                component={TodeBags}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <TodeBagsIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }

                })}
            />
            <Tab.Screen
                name="Kurti"
                component={Kurti}
                options={({ color, size }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <KurtiIcon color={color} size={size} />
                    ),
                    tabBarLabelStyle: { color: isFocused ? '#BBA0FF' : "#6C31FF" }

                })}
            />
        </Tab.Navigator>
    );
}

// Define separate components for each icon to handle focused styling
function HomeIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='home'
            type='font-awesome'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}

function SareeIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='home'
            type='font-awesome'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}

function JwelleryIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='diamond'
            type='material'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}

function TodeBagsIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='bag'
            type='ionicon'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}

function KurtiIcon({ color, size }) {
    const isFocused = useIsFocused();
    return (
        <Icon
            name='shirt'
            type='ionicon'
            color={!isFocused ? '#BBA0FF' : "#6C31FF"} // Change color when focused
        />
    );
}
