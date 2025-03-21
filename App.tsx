import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

import FirstScreen from './source/screens/FirstScreen';
import {setNavnameis} from './redux/slice/NavigationStateSlice';
import SignIn from './source/screens/AuthPages/SignIn';
import SignUp from './source/screens/AuthPages/SignUp';
import ProfilePage from './source/screens/CommonScreens/ProfilePage';
import OwnerHomePage from './source/screens/OwnerDrawerScreens/OwnerHomePage';
import NotificationPage from './source/screens/CommonScreens/NotificationPage';
import HistoryPage from './source/screens/CommonScreens/HistoryPage';
import AssignDeliveries from './source/screens/OwnerDrawerScreens/AssignDeliveries';
import RealTimeMap from './source/screens/OwnerDrawerScreens/RealTimeMap';
import AssignedDeliveries from './source/screens/DriveDrawerScreens/AssignedDeliveries';
import DriverHomePage from './source/screens/DriveDrawerScreens/DriverHomePage';
import { Poppins_Bold, theme_clr_10, theme_clr_medium_grey } from './style_sheet/styles';
import CustomDrawer from './CustomNavigations/CustomDrawer';
import IconComponent from './source/My_components/Icon_Component/IconComponent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const handleIcons=(name,icon,isfocused)=>{
return(
  <IconComponent name={name} icon={icon} size={18} color={isfocused?theme_clr_10:theme_clr_medium_grey} />
)
}

const AuthPages = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const DrawerTabs = ({screentype}) => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveTintColor: theme_clr_10,  // Active item color
      drawerInactiveTintColor: '#555',   // Inactive item color
      drawerLabelStyle: {
        fontSize: 16,
        fontFamily:Poppins_Bold,
        marginVertical:-10,
        fontWeight: 'bold',
      },
      drawerStyle: {
        backgroundColor: '#F8F9FA', // Drawer background color
        width: 250,
      },

      drawerItemStyle: {
        borderRadius: 8,
        marginVertical:5,

      },
    }}
    >
                {/* <Drawer.Screen name="Real Time Map" component={RealTimeMap}
          options={{drawerIcon: ({focused, color, size }) =>handleIcons('Ionicons','map',focused)}} />
    */}
      {screentype == 'ownerscreens' && (
        <>
          <Drawer.Screen name="Home" component={OwnerHomePage} 
           options={{drawerIcon: ({focused, color, size }) =>handleIcons('Entypo','home',focused)}}/>
          <Drawer.Screen name="Profile" component={ProfilePage}
          options={{drawerIcon: ({focused, color, size }) =>handleIcons('FontAwesome','user',focused)}} />
          <Drawer.Screen name="Notification" component={NotificationPage}
          options={{drawerIcon: ({focused, color, size }) =>handleIcons('Ionicons','notifications',focused)}} />
          <Drawer.Screen name="Assign Deliveries" component={AssignDeliveries}
          options={{drawerIcon: ({focused, color, size }) =>handleIcons('MaterialIcons','assignment',focused)}} />
          <Drawer.Screen name="History" component={HistoryPage}
          options={{drawerIcon: ({focused, color, size }) =>handleIcons('MaterialIcons','history',focused)}} />

        </>
      )}
      {screentype == 'driverscreens' && (
        <>
          <Drawer.Screen name="Home" component={DriverHomePage}
           options={{drawerIcon: ({focused, color, size }) =>handleIcons('Entypo','home',focused)}}/>
          <Drawer.Screen name="Profile" component={ProfilePage}
          options={{drawerIcon: ({focused, color, size }) =>handleIcons('FontAwesome','user',focused)}} />
          <Drawer.Screen name="Notification" component={NotificationPage}
          options={{drawerIcon: ({focused, color, size }) =>handleIcons('Ionicons','notifications',focused)}} />
          <Drawer.Screen name="Assigned Deliveries" component={AssignedDeliveries}
          options={{drawerIcon: ({focused, color, size }) =>handleIcons('MaterialIcons','assignment',focused)}} />
          <Drawer.Screen name="History" component={HistoryPage}
          options={{drawerIcon: ({focused, color, size }) =>handleIcons('MaterialIcons','history',focused)}} />
        </>
      )}
    </Drawer.Navigator>
  );
};

// Main App

export default function App() {
  const navname = useSelector(state => state.navnameis.navname);
  const dispatch = useDispatch();

  console.log(navname);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setNavnameis('auth'));
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {navname === 'auth' ? (
        <AuthPages />
      ) : navname === 'driverscreens' || navname === 'ownerscreens' ? (
        <DrawerTabs screentype={navname} />
      ) : (

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}>
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
