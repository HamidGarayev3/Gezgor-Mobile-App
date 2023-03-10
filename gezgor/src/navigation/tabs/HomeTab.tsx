import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { faCompass, faUser } from '@fortawesome/free-solid-svg-icons';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import HomeTitle from '../../components/Home/HomeTitle';
import Explore from '../../screens/Explore';
import Maps from '../../screens/Maps';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (

    <Tab.Navigator  initialRouteName="Explore">
    <Tab.Screen
        options={{
            tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon size={size} color={color} icon={faCompass} />,
            header: () => <HomeTitle />,
            tabBarShowLabel: false
        }}
        name="Explore"
        component={Explore} />
    <Tab.Screen
        name="Home"
        component={Home}
        options={{
            tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon size={size} color={color} icon={faHouse} />,
            header: () => <HomeTitle />,
            tabBarShowLabel: false,
        }} />
            <Tab.Screen
        name="Map"
        component={Maps}
        options={{
            tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon size={size} color={color} icon={faLocationDot} />,
            header: () => <HomeTitle />,
            tabBarShowLabel: false,
        }} />
            <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
            tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon size={size} color={color} icon={faUser} />,
            header: () => <HomeTitle />,
            tabBarShowLabel: false,
        }} />
</Tab.Navigator>
  )
}

export default HomeTab