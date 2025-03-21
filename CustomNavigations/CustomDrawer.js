import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Poppins_Bold, Poppins_Regular, theme_clr_11, theme_clr_5, theme_clr_5_medium, theme_clr_light_grey, theme_clr_white } from '../style_sheet/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setNavnameis } from '../redux/slice/NavigationStateSlice';
import { handleSignOut } from '../HelperFunctions/Functions';

const CustomDrawer = (props) => {

    console.log('props::',props);
    
    const dispatch = useDispatch();

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
            {/* Background Image */}
            <View style={styles.header}>
                <Image source={require('../source/Assets/images/logo.png')} style={styles.backgroundImage} />
                {/* <Image source={require('../source/Assets/images/logo.png')} style={styles.logo} /> */}
                <Text style={styles.appname}>Safe Fuel Supply & Tracking</Text>
            </View>

            {/* Drawer Items */}
            <View style={styles.drawerItems}>
                <DrawerItemList {...props} />

                <TouchableOpacity
                    onPress={() => handleSignOut(dispatch)}
                    style={styles.sign_out_btn}>
                    <Text style={styles.sign_out_text}>Sign Out</Text>
                </TouchableOpacity>
            </View>


        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomRightRadius:10
    },
    header: {
        alignItems: 'center',
        padding: 5,
        marginBottom:20,
        borderBottomWidth: 1,
        borderColor: theme_clr_light_grey
        // backgroundColor: theme_clr_11,
    },
    appname:{
        fontSize:13,
        fontFamily:Poppins_Bold,
        color:theme_clr_11
    },
    backgroundImage: {
        // position: 'absolute',
        width: 150,
        height: 80,

        top: 0,
        left: 0,
        opacity: 0.5,
    },

    drawerItems: {
        // backgroundColor: '#fff',
        flex: 1,
    },
    sign_out_btn: {
        position: 'absolute',
        bottom: 30,
        borderRadius: 8,
        backgroundColor: theme_clr_5_medium,
        paddingVertical: 6,
        paddingLeft: 15,
        width: '100%'
    },
    sign_out_text: {
        color: theme_clr_white,
        fontFamily: Poppins_Regular,
        fontSize: 14
    },
});

export default CustomDrawer;
