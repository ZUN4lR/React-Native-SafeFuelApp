import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Poppins_Bold, Poppins_Regular, theme_clr_10, theme_clr_10_transparent, theme_clr_11, theme_clr_11_transparent, theme_clr_dull_white, theme_clr_dull_white_transparent, theme_clr_light_grey, theme_clr_light_grey_transparent, theme_clr_white, width } from '../../../style_sheet/styles'
import { useNavigation } from '@react-navigation/native'
import Textinput from '../../My_components/TextInputs/Textinput'
import AppButton from '../../My_components/Buttons/AppButton'
import { setNavnameis } from '../../../redux/slice/NavigationStateSlice'
import { useDispatch } from 'react-redux'

const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    console.log('Sign In')
    dispatch(setNavnameis('ownerscreens'))
  }

  return (
    <LinearGradient
      colors={[theme_clr_white, theme_clr_white, theme_clr_10]}
      start={{ x: 0, y: 0 }}
      end={{ x: .9, y: .9 }}
      style={{ height: '100%' }}
    >
      <StatusBar barStyle={'dark-content'} backgroundColor={theme_clr_white} />
      <ScrollView showsVerticalScrollIndicator={false}>

        <Image source={require('../../Assets/images/logo.png')}
          style={{ height: width / 2, width: width, opacity: .2, top: 130, position: 'absolute' }} />



        <Text style={styles.page_text}>SIGN{'\n'}IN</Text>

        <View style={styles.input_view}>

          <View style={{ gap: 5, marginBottom: 30 }}>
            <Textinput
              text={'Email'}
              place_holder={'Enter your email'}
              set_val={setEmail}
              val={email}
            />

            <Textinput
              text={'Password'}
              place_holder={'Enter your password'}
              set_val={setPassword}
              val={password}
              type={'password'}
            />

          </View>

          <AppButton
            on_press={() => handleSignIn()}
            text={'Sign In'}
            fsize={15}
            fstyle={'regular'}
            text_color={'#fff'}
            border={8}
            btn_height={14}
            background_color={theme_clr_10}
          />


        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 10 }}>
          <Text style={[styles.text, { fontSize: 14 }]}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={{ color: theme_clr_11, textDecorationLine: 'underline', fontFamily: Poppins_Bold, paddingVertical: 10 }}> Sign up</Text>
          </TouchableOpacity>
        </View>



      </ScrollView>
    </LinearGradient>
  )
}

export default SignIn

const styles = StyleSheet.create({
  page_text: {
    color: theme_clr_10_transparent,
    fontSize: width / 2.8,
    margin: 10,
    marginTop: '10%',
    lineHeight: width / 3,
    fontFamily: Poppins_Bold
  },
  input_view: {
    borderWidth: 2,
    borderColor: theme_clr_10_transparent,
    backgroundColor: theme_clr_dull_white_transparent,
    marginHorizontal: 10,
    paddingVertical: 20,
    marginTop: '10%',
    padding: 10,
    borderRadius: 15
  },
  text: {
    color: theme_clr_white,
    fontSize: 12,
    textAlign: 'center',
    fontFamily: Poppins_Regular
  },
})