import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Poppins_Bold, Poppins_Regular, theme_clr_10, theme_clr_10_transparent, theme_clr_10_transparent_0, theme_clr_10_transparent_0_max, theme_clr_4, theme_clr_6, theme_clr_6_light, theme_clr_dark, theme_clr_light_grey, theme_clr_white, width } from '../../../style_sheet/styles'
import IconComponent from '../Icon_Component/IconComponent'
import LinearGradient from 'react-native-linear-gradient'

const OrderCard = ({data=null}) => {
    return (

        <View style={styles.main_view} >


            <Text style={styles.order_status}>{data.status}</Text>


            <View style={{ flexDirection: 'row', gap: 5 }}>
                <View style={styles.img_view}>
                    <Image source={require('../../Assets/images/fueldrop.png')}
                        style={{ width: 40, height: 40 }}
                    />
                </View>

                <View style={{ width: width / 2.1 }}>
                    <Text style={styles.order_number}> {data.fuel_type}</Text>

                    <Text style={[styles.order_number, { backgroundColor: theme_clr_white, borderWidth: 1, alignSelf: 'flex-start', fontSize: 10, paddingHorizontal: 5, borderRadius: 8, paddingTop: 2 }]}>Order#{data.order_number}</Text>

                </View>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <TouchableOpacity
                    style={[styles.icons,{backgroundColor: theme_clr_4}]}>
                    <IconComponent name={'FontAwesome5'} icon={'route'} size={18} color={theme_clr_dark} />

                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.icons,{  backgroundColor: theme_clr_6_light}]}>
                    <IconComponent name={'MaterialCommunityIcons'} icon={'script-text-outline'} size={18} color={theme_clr_dark} />

                </TouchableOpacity>
            </View>


        </View>

    )
}

export default OrderCard

const styles = StyleSheet.create({
    main_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: theme_clr_light_grey,
        backgroundColor:theme_clr_10_transparent_0_max,
        borderRadius: 15,
        padding: 10,

        paddingTop: 25,
    },
    order_status: {
        position: 'absolute',
        borderBottomRightRadius: 20,
        fontSize: 11,
        fontFamily: Poppins_Bold,
        color: theme_clr_dark,
        paddingHorizontal: 20,
        paddingLeft: 50,
        backgroundColor: theme_clr_4,

    },
    img_view: {
        borderWidth: 2,
        borderColor: theme_clr_light_grey,
        backgroundColor: theme_clr_white,
        alignSelf: 'flex-start',
        borderRadius: 1000,
        padding: 5
    },
    order_number: {
        fontSize: 13,
        color: theme_clr_dark,
        fontFamily: Poppins_Bold,
    },
    icons:{
         padding: 8,
          borderRadius: 10,
           borderWidth: 1,
            borderColor: theme_clr_dark 
    },

})