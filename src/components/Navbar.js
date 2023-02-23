import React from 'react'
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ListingScreen, CartScreen } from '../screen';
import { Icon } from '@rneui/themed';
import { auth, fireDB } from '../../firebase';

const Tab = createBottomTabNavigator();

const Navbar = (props) => {
    const renderNavBar = () => {
        if(auth.currentUser != undefined) {
            return(
                <NavigationContainer>
                    <Tab.Navigator
                        screenOptions={{
                            tabBarStyle: {borderTopLeftRadius: 100, borderTopRightRadius: 100},
                            headerTitle: 'Ugly Pets',
                            headerShown: false
                        }}
                    >
                        <Tab.Screen 
                            name="Market" 
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

        else {
            return (
                <HomeScreen/>
            )
        }
    }

    return (
        renderNavBar()
    )
}

const styles = StyleSheet.create({})

export default Navbar