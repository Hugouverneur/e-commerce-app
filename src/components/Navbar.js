import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ListingScreen, CartScreen } from '../screen';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

const Navbar = (props) => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {borderTopLeftRadius: 100, borderTopRightRadius: 100},
                headerTitle: 'Ugly Pets',
                headerShown: false
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    tabBarActiveTintColor: '#fd9340',
                    tabBarInactiveTintColor: '#fd9340',
                    tabBarActiveBackgroundColor: '#ffede0',
                    tabBarItemStyle: {borderTopLeftRadius: 100},
                    tabBarLabelStyle: {fontWeight: 'bold'},
                    tabBarIcon: ({} = () => (
                        <Icon name='home' color='#fd9340' />
                    ))
                }}
            />
            <Tab.Screen 
                name="Listing" 
                component={ListingScreen}
                options={{
                    tabBarActiveTintColor: '#fd9340',
                    tabBarInactiveTintColor: '#fd9340',
                    tabBarActiveBackgroundColor: '#ffede0',
                    tabBarLabelStyle: {fontWeight: 'bold'},
                    tabBarIcon: ({} = () => (
                        <Icon name='pets' color='#fd9340' />
                    ))
                }}
            />
            <Tab.Screen 
                name="Cart" 
                component={CartScreen} 
                options={{
                    tabBarActiveTintColor: '#fd9340',
                    tabBarInactiveTintColor: '#fd9340',
                    tabBarActiveBackgroundColor: '#ffede0',
                    tabBarItemStyle: {borderTopRightRadius: 100},
                    tabBarLabelStyle: {fontWeight: 'bold'},
                    tabBarIcon: ({} = () => (
                        <Icon name='shopping-cart' color='#fd9340' />
                    ))
                }}    
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default Navbar