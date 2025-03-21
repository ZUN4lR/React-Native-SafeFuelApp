import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Montserrat_Regular, Poppins_Bold, Poppins_Regular, theme_clr_10, theme_clr_10_transparent_0, theme_clr_11, theme_clr_dark, theme_clr_light_grey, theme_clr_white, width } from '../../../style_sheet/styles'
import AppHeader from '../../My_components/Header/AppHeader'
import { ScrollView } from 'react-native-gesture-handler'
import HomeScreenBanner from '../../My_components/Banners/HomeScreenBanner'
import { useFocusEffect } from '@react-navigation/native'

const ProfilePage = () => {


  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(theme_clr_10);
      StatusBar.setTranslucent(false)
      StatusBar.setBarStyle('dark-content');
    }, [])
  );

  return (
    <View style={{ backgroundColor: theme_clr_white, flex: 1 }}>
      <View style={{ zIndex: 2 }}>
        <AppHeader
          bar_color={theme_clr_white}
          background={theme_clr_10}
          heading={'Profile'} />
      </View>


      <View style={{ backgroundColor: theme_clr_10, height: 150, top: 0 }} />
      <View style={styles.white_cut_bar} />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 60
        }}
        style={styles.main_scroll_view}
        showsVerticalScrollIndicator={false}
      >


        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
          <View style={styles.img_view}>
            <Image
              style={{ height: width / 4, width: width / 4 }}
              source={require('../../Assets/images/fueldrop.png')} />
          </View>

          <View style={{ gap: 10 }}>
            <View>
              <Text style={{ fontSize: 15, fontFamily: Poppins_Bold, color: theme_clr_dark, width: width / 1.8 }}>Ali Raza Ahmed</Text>
              <Text style={{ fontSize: 15, fontFamily: Poppins_Regular, color: theme_clr_dark, fontStyle: 'italic' }}>aliraza@gmail.com</Text>
            </View>

            <Text style={{ fontSize: 12, fontFamily: Poppins_Bold, color: theme_clr_dark }}>0345285969334</Text>
          </View>
        </View>


        <View style={{ paddingVertical: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: Poppins_Bold, color: theme_clr_dark }}>User Type :{'\n'}
            <Text style={{ color: theme_clr_10 }}>
              {'                    '}{'Owner'}</Text>
          </Text>
        </View>

      </ScrollView>

    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({
  img_view: {
    borderWidth: 10,
    borderColor: theme_clr_10,
    backgroundColor: theme_clr_white,
    alignSelf: 'flex-start',
    borderRadius: 1000,
    padding: 5,
  },
  white_cut_bar: {
    backgroundColor: theme_clr_white,
    height: 150,
    width: width * 2,
    top: 80,
    left: -10,
    transform: [{ rotate: '-20deg' }],
    position: 'absolute',
    zIndex: 1
  },
  main_scroll_view: {
    position: 'absolute',
    top: 100,
    zIndex: 2,
    width: '100%',
  }
})