import Login from './src/components/Auth/Login';
import { createStackNavigator } from 'react-navigation-stack';
import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
import Detail from './src/components/Detail';
import Feed from './src/components/Feed';
import Management from './src/components/DrawerScreens/Management';
import EditProduct from './src/components/DrawerScreens/EditProduct';

import { Thumbnail, Text } from 'native-base';

import React, { Component } from 'react';
import Signup from './src/components/Auth/SignUp';
import History from './src/components/DrawerScreens/History';
import Order from './src/components/DrawerScreens/Order';
import Settings from './src/components/DrawerScreens/Settings';

const AuthStack = createStackNavigator(
    {
        LoginRoute: Login,
    },
    {
        defaultNavigationOptions: {
            header: null
        }
    }
);

const customComponentDrawer = () => {
    return (
        <Text>Yahalo</Text>
    )
}

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Feed,
        navigationOptions: () => ({
            title: 'Home',
        }),
    },
    Orders: {
        screen: Order,
        navigationOptions: () => ({
            title: 'Orders'
        })
    },
    ManagementItem: {
        screen: Management,
        navigationOptions: () => ({
            title: 'Management Item'
        })
    },
    History: {
        screen: History,
        navigationOptions: () => ({
            title: 'History'
        })
    },
    Settings: {
        screen: Settings,
        navigationOptions: () => ({
            title: 'Settings', 
        })
    },
    Logout: {
        screen: Login,
    },
},
    // {contentComponent: customComponentDrawer }
);


const DrawerStackNavigator = createStackNavigator(
    {
        DrawerNavigator: {
            screen: DrawerNavigator,
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            // headerStyle: {
            //     backgroundColor: '#ffdb58',
            // },
            // headerTitleStyle: { alignSelf: 'center' },
            // title: navigation.state.routes[navigation.state.index].routeName,
            // headerTintColor: 'white',
            // headerLeft: (
            //     <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            //         <Thumbnail style={{ marginLeft: 8}} small source={profileImage} />
            //     </TouchableOpacity>
            // ),          
            header: null
        })
    }
)

const AppStack = createStackNavigator({
    DrawerRoute: {
        screen: DrawerStackNavigator,
        navigationOptions: {
            header: null
        },
    },
    DetailRoute: Detail,
    SignupRoute: Signup,
    EditProduct: {
        screen: EditProduct,
        navigationOptions: {
            header: null
        },
    },
})

export default createAppContainer(createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack,
    },
    {
        defaultNavigationOptions: {
            headerTintColor: 'white'
        },
    }
));