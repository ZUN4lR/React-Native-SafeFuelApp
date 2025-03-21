import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Poppins_Bold, Poppins_Regular, theme_clr_10, theme_clr_10_transparent_0, theme_clr_11, theme_clr_11_transparent, theme_clr_dark, theme_clr_light_grey, theme_clr_white, width } from '../../../style_sheet/styles'
import LinearGradient from 'react-native-linear-gradient'
import AppHeader from '../../My_components/Header/AppHeader'
import HomeScreenBanner from '../../My_components/Banners/HomeScreenBanner'
import OrderCard from '../../My_components/Cards/OrderCard'

const OwnerHomePage = () => {

  const navigation = useNavigation()
  const [currentorders, setCurrentorders] = useState([
    { status: 'Pending', fuel_type: 'Petrol', order_number: '23325' },
  ])



  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(theme_clr_white);
      StatusBar.setTranslucent(false)
      StatusBar.setBarStyle('dark-content');
    }, [])
  );

  return (
    <LinearGradient
      colors={[theme_clr_white, theme_clr_white, theme_clr_10_transparent_0]}
      start={{ x: 0, y: 0 }}
      end={{ x: .9, y: .9 }}
      style={{ height: '100%' }}
    >
      <AppHeader heading={'Home'} />


      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}>

        <HomeScreenBanner />

        <Text style={styles.current_orders_text}>Current Orders</Text>

        {Array.isArray(currentorders) && currentorders?.map((item, index) => (

          <OrderCard key={index} data={item} />

        ))
        }
        {currentorders.length === 0 && <Text style={{ fontSize: 20, fontFamily: Poppins_Regular, color: theme_clr_dark, paddingTop: 50, textAlign: 'center' }}>No Active Orders !</Text>
        }


      </ScrollView>
    </LinearGradient>

  )
}

export default OwnerHomePage

const styles = StyleSheet.create({
  current_orders_text: {
    fontSize: 18,
    color: theme_clr_dark,
    fontFamily: Poppins_Bold,
    borderWidth: 1,
    borderColor: theme_clr_light_grey,
    alignSelf: 'center',
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 30

  },
})