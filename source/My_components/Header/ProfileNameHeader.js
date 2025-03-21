import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Montserrat_Bold, Montserrat_Regular, theme_clr_light_grey, theme_clr_medium_grey } from '../../../style_sheet/styles'
import ArrowRightDark from '../../Assets/svg/ArrowRightDark.svg'


const ProfileNameHeader = ({ img, name = false, title = false }) => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-between' }}>

            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <Image source={{ uri: img }}
                    resizeMode='cover'
                    style={{ height: 65, width: 65, borderRadius: 100 }}
                />


                <View style={{ gap: 4 }}>
                    <Text style={{ fontSize: 12, color: theme_clr_light_grey, fontFamily: Montserrat_Regular }}>Name</Text>
                    <View>
                        <Text style={{ fontSize: 16, color: theme_clr_medium_grey, fontFamily: Montserrat_Bold }}>{name.length > 22 ? name.substring(0, 19) + '...' :name}</Text>
                        <Text style={{ fontSize: 12, color: theme_clr_medium_grey, fontFamily: Montserrat_Regular }}>{title}</Text>
                    </View>
                </View>
            </View>

            <ArrowRightDark />
        </View>
    )
}

export default ProfileNameHeader

const styles = StyleSheet.create({})