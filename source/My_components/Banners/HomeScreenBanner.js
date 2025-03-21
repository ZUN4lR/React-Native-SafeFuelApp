import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Montserrat_Bold, Montserrat_Regular, Poppins_Bold, Poppins_Regular, theme_clr_10, theme_clr_dark, theme_clr_white, width } from '../../../style_sheet/styles'

const HomeScreenBanner = () => {
    return (
        <View style={{ backgroundColor: theme_clr_10, marginVertical: 5, borderRadius: 10,borderBottomLeftRadius:20,borderBottomRightRadius:20, padding: 10 }}>

            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <View style={[styles.white_blocks, { left: 5 }]} />
                <View style={[styles.round_white_block, { borderTopRightRadius: 4, }]} />
                <View style={styles.white_bar_view} />
                <View style={[styles.white_blocks, { right: 5 }]} />
                <View style={[styles.round_white_block, { borderTopLeftRadius: 4, }]} />
            </View>

            <View style={{ paddingBottom: 20 }}>
                <Text style={styles.user_type}>OWNER</Text>
                <Text style={{ fontSize: 20, fontFamily: Poppins_Bold, color: theme_clr_white }}>Welcome Back,</Text>

                <Text style={{ fontSize: 15, fontFamily: Poppins_Regular, color: theme_clr_white, alignSelf: 'center' }}>Ahmed Ali Raza</Text>
            </View>
        </View>

    )
}

export default HomeScreenBanner

const styles = StyleSheet.create({
    white_blocks: {
        backgroundColor: theme_clr_white,
        height: 5,
        width: 10,
        position: 'absolute',
        top: -10,
        zIndex: 1,
    },
    round_white_block: {
        backgroundColor: theme_clr_10,
        zIndex: 2,
        height: 10,
        width: 10,
        top: -12.5,
        alignSelf: 'center',
    },
    white_bar_view: {
        backgroundColor: theme_clr_white,
        borderRadius: 3,
        height: 15,
        width: width / 2.5,
        top: -10,
        zIndex: 1,
        alignSelf: 'center'
    },
    user_type: {
        fontSize: 12,
        backgroundColor: theme_clr_white,
        borderRadius: 5,
        borderWidth:1,
        borderColor:theme_clr_dark,
        fontFamily: Montserrat_Regular,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical:2,
        color: theme_clr_dark
    },
})