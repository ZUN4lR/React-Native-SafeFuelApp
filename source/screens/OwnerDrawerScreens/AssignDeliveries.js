import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { theme_clr_10, theme_clr_10_transparent_0, theme_clr_white, width } from '../../../style_sheet/styles';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../../My_components/Header/AppHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import Textinput from '../../My_components/TextInputs/Textinput';
import AppButton from '../../My_components/Buttons/AppButton';
import DropdownType1 from '../../My_components/Dropdowns/DropdownType1';
import CaledarModal from '../../My_components/Modals/CaledarModal';
import OwnerAssignMap from '../../My_components/Maps/OwnerAssignMap';

const AssignDeliveries = () => {

  const [avalibledriver, setAvalibledriver] = useState('')
  const [fueltype, setFueltype] = useState('')
  const [scheduledate, setScheduledate] = useState([]);
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [address, setAddress] = useState('')


  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(theme_clr_white);
      StatusBar.setTranslucent(false);
      StatusBar.setBarStyle('dark-content');
    }, [])
  );

  return (
    <LinearGradient
      colors={[theme_clr_white, theme_clr_white, theme_clr_10_transparent_0]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.9, y: 0.9 }}
      style={{ height: '100%' }}
    >
      <AppHeader heading={'Assign Deliveries'} />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10, paddingBottom: 60 }} showsVerticalScrollIndicator={false}>

        {/* <Text>{fueltype}</Text>
        <Text>{scheduledate}</Text> */}

        <View style={{ gap: 10 }}>

          <View style={{ width: width / 1.06 }}>
            <DropdownType1
              title={`Select Driver`}
              set_seleted_option={setAvalibledriver}
              seleted_option={avalibledriver}
              data_list={[
                { data: 'No Driver Avalible !' },
              ]}
              dropdown_height={300}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: width / 2.2 }}>
              <DropdownType1
                title={`Fuel Type`}
                set_seleted_option={setFueltype}
                seleted_option={fueltype}
                data_list={[
                  { data: 'Petrol' },
                  { data: 'Diesel' },
                  { data: 'CNG' },
                ]}
                dropdown_height={100}
              />
            </View>

            <View style={{ width: width / 2.2 }}>
            <CaledarModal title={'Schedule Date'} set_selected_date={setScheduledate} />

            </View>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: width / 2.2 }}>
              <Textinput
                text={'Price'}
                place_holder={'Enter Price'}
                set_val={setPrice}
                input_mode={'numeric'}
                val={price}
              />
            </View>

            <View style={{ width: width / 2.2 }}>
              <Textinput
                text={'Quantity'}
                place_holder={'Enter Quantity'}
                set_val={setQuantity}
                input_mode={'numeric'}
                val={quantity}
              />
            </View>


          </View>

          <Textinput
            text={'Address'}
            place_holder={'Enter Address'}
            set_val={setAddress}
            val={address}
          />


          <View style={{ marginTop: 30 }}>
            <AppButton
              // on_press={() =>handleSignIn()}
              text={'Assign'}
              fsize={15}
              fstyle={'regular'}
              text_color={'#fff'}
              border={8}
              btn_height={14}
              background_color={theme_clr_10}
            />
          </View>


        </View>

        {/* <Text>{'asdasdas' + date2.day}</Text> */}


        {/* <OwnerAssignMap /> */}


      </ScrollView>
    </LinearGradient>
  );
};
export default AssignDeliveries

const styles = StyleSheet.create({})