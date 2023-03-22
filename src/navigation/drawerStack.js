import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserStack from './userStack';

// Screens
import PropertiesScreen from '../screens/PropertiesScreen';
import AddPropertiesScreen from '../screens/AddPropertyScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={UserStack} />
            <Drawer.Screen name="Properties" component={PropertiesScreen} />
            <Drawer.Screen name="Add Properties" component={AddPropertiesScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;

