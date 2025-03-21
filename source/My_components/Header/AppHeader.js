import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IconComponent from '../Icon_Component/IconComponent'
import { Poppins_Bold, theme_clr_10, theme_clr_dark, theme_clr_medium_grey, theme_clr_white } from '../../../style_sheet/styles'
import { useNavigation } from '@react-navigation/native'

const AppHeader = ({ heading = 'SFSTS',bar_color=theme_clr_10,background=theme_clr_white }) => {
  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: 'row',backgroundColor:background, justifyContent: 'space-between', alignItems: 'center',paddingVertical:5, paddingHorizontal: 20 }}>

      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={{ padding: 10 }}
      >
        <IconComponent name={'FontAwesome'} icon={'bars'} size={25} color={bar_color} />
      </TouchableOpacity>


      <Text style={{ fontSize: 20, fontFamily: Poppins_Bold, color: theme_clr_dark }}>{heading}         </Text>
      <Text />
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({})