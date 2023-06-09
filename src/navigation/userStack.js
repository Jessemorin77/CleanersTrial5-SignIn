import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from '../screens/HomeScreen';
import PropertiesScreen from '../screens/PropertiesScreen';
import AddPropertiesScreen from '../screens/AddPropertyScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DrawerContent from '../Components/DrawerComponent';
import {createDrawerNavigator} from "@react-navigation/drawer";
import ContactUsScreen from "../screens/ContactUsScreen";
import CalendarScreen from "../screens/CalendarScreen";
import InboxScreen from "../screens/InboxScreen";
import ScheduleCleaningScreen from "../screens/ScheduleCleaningScreen";
import WorkTypeScreen from "../screens/WorkTypeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ContactUs" component={ContactUsScreen}/>
            </Stack.Navigator>
    );
};

const ScheduleStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="ScheduleCleaning" component={ScheduleCleaningScreen} />

        </Stack.Navigator>
    );
};
const PropertyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Properties" component={PropertiesScreen}/>
            <Stack.Screen name="AddProperty" component={AddPropertiesScreen} />
        </Stack.Navigator>
    );
};

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
};

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Properties" component={PropertyStack} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="Inbox" component={InboxScreen} />

        </Tab.Navigator>
    );
};

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="TabNavigation" component={TabNavigation} options={{ title: null }}/>
            <Drawer.Screen name="ScheduleCleaning" component={ScheduleCleaningScreen} />
            <Drawer.Screen name="WorkType" component={WorkTypeScreen} />
            <Drawer.Screen name="Profile" component={ProfileStack} />

        </Drawer.Navigator>
    );
};


export default DrawerNavigation;


//Nav Bar:
//home  properties:  calander: inbox:  drawer


/*
            <DrawerNavigation>
 <Tab.Screen name = "Calander" component={CaledarSceen}/>
 <Tab.Screen name="Drawer" component={Drawer} />
* TODO:
*
*
*
* homepage:
*
*
*   ->Button Schedule job
*       -> schedule jobs screen(choose: company/worker/contractor -> Search: work and List job categories -> list profiles)
*   list: any scheduled jobs
*   category list buttons:
*       Buttons work-catagories
*   job costs -> work-costs screen(choose: company/worker/contractor -> Search: work and List job categories -> list profiles )
*   Button: ToDo Lists
*            -> ToDo lists screen
*               -> Button: create todo list
*               ->List ToDo's
*              -> createToDoScreen screen
*   Button: Calender
*       ->CalanderScreen
*           -> add event
*               ->date:
*               ->event:
*               ->time range:
*           -> Google calendar API
*           -> Add scheduled jobs to calandar
*   Welcome Screen
*       ->app tutorial
*               Welcome to Rentle Owners Tools!
*               Manage the jobs on your rental property
*               Connecting with companies/contractors/workers in your area
*               Find cleaners carpenters plummers ect.
*
*               Add Property
*               schedule a property for work
*               Choose between companies/contractors/workers
*
*               get a quote:
*               manage events with google calaneder
*               message with companies/contractors/workers
*               property matenence planner: Create to do lists
*
*       ->Button: Create Account
*       ->Button: Sign In
*   InboxScreen:
*       Button: New Message
*           ->input: to:
*       List: Messages
*
* */




/*home
*   Search
*
* media bar
*
* schedule work button
*
*schedule
*
*   catagories
*
*   project planner
*
*  project costs
*
*
*
*     */
/* properties
*
*
* list of properties
*
* property 1   button: schedule work
*
* protery 2    button: schedule work
*
*
* B: in progress":
*
* B: hire company
*
* B: hire contractor
*
* House interior clean
*
* completed projects:
*
*
* ***********
*Calander page:
*
* Google calendar api
*
* options: day, month,  3 month
*
* month view:
* All scheduled events
*****************
* Inbox
*
* New message:
*
*
*  Companies
*
*
* independents
*
*
***********************
*   drawer
*
*   Payments:
*
*   Notifications:
*
*   directory:
*       page of all of the companies and people in the area
*   cost guide
*       type of work and area
*       acerage cost:
*           company:
*           individual:
*   contact us:
*
*   feedback:
*
*
*
*
*  */