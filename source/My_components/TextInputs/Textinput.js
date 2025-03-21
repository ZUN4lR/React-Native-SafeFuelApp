import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Montserrat_Bold, Montserrat_Regular, theme_clr_1, theme_clr_10, theme_clr_10_transparent, theme_clr_11, theme_clr_3, theme_clr_dull_white, theme_clr_grey_1, theme_clr_light_grey, theme_clr_medium_grey, width } from '../../../style_sheet/styles'
import EyeHide from '../../Assets/svg/EyeHide.svg'
import Eye from '../../Assets/svg/Eye.svg'
import ArrowRightDark from '../../Assets/svg/ArrowRightDark.svg'


const Textinput = ({ text = '', place_holder = '...', type = 'text', set_val, val, editable = true, multiline = false, input_mode = 'default', right_icon = false, show_eye = true,on_press=null }) => {
  const [focus, setFocus] = useState(false)
  const [passwordvisible, setPasswordvisible] = useState(true)

  const inputRef = useRef(null)

  const InputWrapper = on_press && on_press!=null ? TouchableOpacity : View;

  return (
    
     <InputWrapper
     onPress={on_press}
     style={{ gap: 8 }}>

      <Text style={[styles.title]}>{text}</Text>

      <View style={[styles.main_view, { borderColor: focus ? theme_clr_10_transparent : theme_clr_grey_1 }]}>

        <View style={{ height: (!focus && multiline) && multiline * 20, width: (type == 'password' || right_icon) ? '90%' : '100%' }}>
          <TextInput
            ref={inputRef}
            editable={editable}
            multiline={multiline ? true : false}
            numberOfLines={multiline ? multiline : 1}
            placeholder={place_holder}
            onChangeText={(text) => set_val(text)}
            value={val}
            inputMode={input_mode}
            keyboardType={input_mode}
            cursorColor={theme_clr_10_transparent}
            style={[styles.text_input, { width: (type == 'password' || right_icon) ? '90%' : '100%' }]}
            secureTextEntry={passwordvisible && type == 'password' ? true : false}
            placeholderTextColor={theme_clr_light_grey}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}

          />
        </View>
        {(type == 'password' && show_eye) &&
          <TouchableOpacity
            onPress={() => setPasswordvisible(!passwordvisible)}
            style={{ position: 'absolute', right: 5, padding: 10 }}>

            {passwordvisible ? <EyeHide /> : <Eye />}
          </TouchableOpacity>
        }


        {right_icon == 'arrow_right_dark' && <ArrowRightDark />}

      </View>
    </InputWrapper>
   )
}

export default Textinput

const styles = StyleSheet.create({
  main_view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    backgroundColor: theme_clr_dull_white,
    borderWidth: 1.2,
    borderRadius: 8
  },
  title: {
    color: theme_clr_medium_grey,
    fontSize: 12,
    fontFamily: Montserrat_Regular
  },
  text_input: {
    paddingLeft: 15,
    fontSize: 14,
    fontFamily: Montserrat_Regular,
    color: theme_clr_1
  },
})