import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { height, Poppins_Bold, theme_clr_1, theme_clr_10, theme_clr_10_transparent_0, theme_clr_2, theme_clr_6, theme_clr_6_light, theme_clr_8, theme_clr_medium_grey, theme_clr_white, width } from '../../../style_sheet/styles';
import NotificationCard from '../../My_components/Cards/NotificationCard';
import AppHeader from '../../My_components/Header/AppHeader';
import { useFocusEffect } from '@react-navigation/native';

const NotificationPage = () => {
  const [nots, setNots] = useState([
    {heading:'Alert',message:'Your order 4544 has been delivered successfully.'},
    {heading:'#365476',message:'Your order 4544 has been delivered successfully.'},
    {heading:'Alert',message:'Your order 4544 has been delivered successfully.'},
    {heading:'#678453',message:'Your order 4544 has been delivered successfully.'},
    {heading:'Alert',message:'Your order 4544 has been delivered successfully.'},
    {heading:'Alert',message:'Your order 4544 has been delivered successfully.'},
    {heading:'#454544',message:'Your order 4544 has been delivered successfully.'},
    {heading:'Alert',message:'Your order 4544 has been delivered successfully.'},
    {heading:'#854566',message:'Your order 4544 has been delivered successfully.'},
    {heading:'#365476',message:'Your order 4544 has been delivered successfully.'},
 
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
      <StatusBar barStyle={'dark-content'} backgroundColor={theme_clr_white} />

      <AppHeader heading={'Notifications'} />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 10 ,paddingBottom:60}}
        showsVerticalScrollIndicator={false}>

        {Array.isArray(nots) && nots?.map((item, index) => (

          <View key={index} style={{ marginVertical: 5 }}>
            <NotificationCard
              notification={item}
            />
          </View>

        ))}

      </ScrollView>
    </LinearGradient>
  );
};

export default NotificationPage;

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
