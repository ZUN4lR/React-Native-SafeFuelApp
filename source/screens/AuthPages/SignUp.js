import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Poppins_Bold, Poppins_Regular, theme_clr_10, theme_clr_10_transparent, theme_clr_11, theme_clr_11_transparent, theme_clr_dull_white, theme_clr_dull_white_transparent, theme_clr_light_grey, theme_clr_light_grey_transparent, theme_clr_white, width } from '../../../style_sheet/styles'
import { useNavigation } from '@react-navigation/native'
import Textinput from '../../My_components/TextInputs/Textinput'
import AppButton from '../../My_components/Buttons/AppButton'
import DropdownType1 from '../../My_components/Dropdowns/DropdownType1'

const SignUp = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('Owner')
  const [tankernumber, setTankerNumber] = useState('')


  useEffect(() => {
    if (role == 'Owner') {
      setTankerNumber('')
    }
  }, [role])

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



        <Text style={styles.page_text}>SIGN{'\n'}UP</Text>

        <View style={styles.input_view}>

          <View style={{ gap: 5, marginBottom: 30 }}>
            <Textinput
              text={'Name'}
              place_holder={'Enter your name'}
              set_val={setName}
              val={name}
            />

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

            <Textinput
              text={'Phone Number'}
              place_holder={'Enter your phone no.'}
              set_val={setPhone}
              val={phone}
            />

            <DropdownType1
              title={`Select Role`}
              set_seleted_option={setRole}
              seleted_option={role}
              data_list={[
                { data: 'Owner' },
                { data: 'Driver' },
              ]}
              dropdown_height={100}
            />

            {role == 'Driver' &&
              <Textinput
                text={'Tanker Number'}
                place_holder={'Enter tanker no.'}
                set_val={setTankerNumber}
                val={tankernumber}
              />}


          </View>

          <AppButton
            // on_press={() => navigation.navigate('SignUp')}
            text={'Sign Up'}
            fsize={15}
            fstyle={'regular'}
            text_color={'#fff'}
            border={8}
            btn_height={14}
            background_color={theme_clr_10}
          />


        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 10 }}>
          <Text style={[styles.text, { fontSize: 14 }]}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={{ color: theme_clr_11, textDecorationLine: 'underline', fontFamily: Poppins_Bold, paddingVertical: 10 }}> Sign in</Text>
          </TouchableOpacity>
        </View>



      </ScrollView>
    </LinearGradient>
  )
}

export default SignUp

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