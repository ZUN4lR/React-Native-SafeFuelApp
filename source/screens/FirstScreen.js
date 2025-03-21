import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { height, Poppins_Bold, theme_clr_1, theme_clr_10, theme_clr_2, theme_clr_6, theme_clr_6_light, theme_clr_8, theme_clr_medium_grey, theme_clr_white, width } from '../../style_sheet/styles';
import LinearGradient from 'react-native-linear-gradient';

const FirstScreen = () => {
    return (
        <LinearGradient
            colors={[theme_clr_10, theme_clr_white, theme_clr_white, theme_clr_10]}
            start={{ x: 0, y: 0 }}
            end={{ x: .9, y: .9 }}
            style={{ height: '100%' }}
        >
            <StatusBar barStyle={'dark-content'} hidden={true} translucent={true} backgroundColor={'transparent'} />

            <View style={{ flex:1,justifyContent:'center',alignItems: 'center', marginBottom: 50 }}>
                <Image source={require('../Assets/images/logo.png')}
                    style={{ height: width / 4, width: width / 2 }} />

                <Text style={styles.logo_text}>SAFE FUEL SUPPLY AND TRACKING SYSTEM</Text>
            </View>

            {/* <Text style={styles.text}>"Ensuring a seamless, {'\n'}secure and efficient fuel supply{'\n'}with real-time tracking"</Text> */}
        </LinearGradient>
    );
};

export default FirstScreen;

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        color: '#000',
        fontSize: width / 18,
        margin: 10,
        bottom: height / 5,
        fontFamily: Poppins_Bold,

    },
    logo_text: {
        fontSize: width / 25,
        color: theme_clr_medium_grey,
        marginVertical: 10,
        fontFamily: Poppins_Bold
    },
});
