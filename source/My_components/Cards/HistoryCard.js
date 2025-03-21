import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Poppins_Bold, Poppins_Regular, theme_clr_10, theme_clr_10_transparent_0_max, theme_clr_5_light, theme_clr_5_medium, theme_clr_8, theme_clr_8_light, theme_clr_8_light_max, theme_clr_chalk, theme_clr_dark, theme_clr_dull_white, theme_clr_grey_1, theme_clr_light_grey, theme_clr_matte, theme_clr_white, width } from '../../../style_sheet/styles';
import IconComponent from '../Icon_Component/IconComponent';

const HistoryCard = ({ history,on_press }) => {

    const dateObj = new Date(history.schedule_date_time);

    // Extracting individual parts
    const year = dateObj.getFullYear();
    // const month = dateObj.getMonth() + 1;
    const month = dateObj.toLocaleString('en-US', { month: 'long' });
    const day = dateObj.getDate() < 10 ? '0' + dateObj.getDate() : dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds

    console.log(history);
    console.log(year, month);


    return (
        <TouchableOpacity
        onPress={on_press}
        style={{ marginVertical: 10, gap: 5 }}>
            <Text style={styles.text_}>{day + ' ' + month + ' ' + year}</Text>

            <View style={styles.main_view}>

                <IconComponent name={'MaterialIcons'} icon={'description'} size={45} color={theme_clr_matte} />
                <View style={{gap:5}}>
                    <View style={styles.view_row}>
                        <Text style={[styles.text_,{fontSize:18,fontFamily:Poppins_Regular,color:theme_clr_chalk}]}>Order{history.order_number}</Text>
                        <Text style={[styles.text_,{fontSize:10,color:history?.status=='Delivered'?theme_clr_dark:theme_clr_5_medium,borderWidth:1,borderRadius:5,borderColor:theme_clr_matte,paddingHorizontal:10,backgroundColor:history?.status=='Delivered'?theme_clr_grey_1:theme_clr_white}]}>{history.status}</Text>
                    </View>

                    <View style={styles.view_row}>
                        <Text style={styles.text_}>{history.price} PKR</Text>
                        <Text style={[styles.text_,{ fontSize: 10, color: theme_clr_light_grey }]}>{hours + ':' + minutes} {hours > 12 ? 'PM' : 'AM'}</Text>
                    </View>

                </View>

            </View>



        </TouchableOpacity>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    main_view: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: theme_clr_dark,
        backgroundColor:theme_clr_white,
        borderRadius: 10,
        gap:5,
        alignItems:'center',
        padding: 10,
    },
    view_row: {
        flexDirection: 'row',
        width: width / 1.4,
        justifyContent: 'space-between',
        alignItems:'center'
        // backgroundColor: 'pink'
    },
    text_: {
        fontSize: 12,
        fontFamily: Poppins_Bold,
        color: theme_clr_dark
    },
})