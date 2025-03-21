import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Poppins_Bold, Poppins_Regular, theme_clr_10, theme_clr_10_transparent, theme_clr_10_transparent_0, theme_clr_10_transparent_0_max, theme_clr_4, theme_clr_4_transparent, theme_clr_dull_white, theme_clr_matte, theme_clr_medium_grey, theme_clr_white, width } from '../../../style_sheet/styles'
import LinearGradient from 'react-native-linear-gradient'
import IconComponent from '../Icon_Component/IconComponent'

const NotificationCard = ({ notification }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: notification.heading == 'Alert' ? theme_clr_4_transparent : theme_clr_10_transparent_0_max, gap: 10, borderWidth: 1, borderRadius: 10, borderColor: theme_clr_matte, padding: 10 }}>

            <View style={{ alignSelf: 'flex-start', backgroundColor: theme_clr_white, borderWidth: 1, borderRadius: 1000, padding: 13 }}>


                {notification.heading == 'Alert' ?
                    <IconComponent name={'Feather'} icon={'alert-triangle'} size={25} color={theme_clr_4} />:
                    <IconComponent name={'MaterialCommunityIcons'} icon={'truck'} size={25} color={theme_clr_10} /> 
                }
            </View>

            <View>
                <Text style={[styles.text, { fontFamily: Poppins_Bold }]}>{notification.heading.includes('#')?'Order'+notification.heading:notification.heading}</Text>
                <Text style={styles.text}>{notification.message}</Text>
            </View>
        </View>
    )
}

export default NotificationCard

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        fontFamily: Poppins_Regular,
        // backgroundColor: 'pink',
        width: width / 1.4
    }
})