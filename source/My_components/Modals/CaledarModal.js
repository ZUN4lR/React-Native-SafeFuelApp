import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import { Montserrat_Bold, Montserrat_Regular, theme_clr_1, theme_clr_10, theme_clr_3, theme_clr_dark, theme_clr_dull_white, theme_clr_light_grey, theme_clr_matte, theme_clr_medium_grey } from "../../../style_sheet/styles";
import AppButton from "../Buttons/AppButton";

const CaledarModal = ({ title = false, set_selected_date }) => {

    const current_date_func = () => {
        const current_date = new Date();
        return {
            day: current_date.getDate(),
            month: current_date.getMonth() + 1,
            year: current_date.getFullYear(),
        };
    };

    const [selectedDate, setSelectedDate] = useState(current_date_func);

    const [isCalendarVisible, setIsCalendarVisible] = useState(false);

    const handleDayPress = (day) => {
        setSelectedDate({
            day: day.day,
            month: day.month,
            year: day.year,
        });
        setIsCalendarVisible(false); // Hide modal after selecting a date
    };

    useEffect(() => {

        set_selected_date(selectedDate)

    }, [selectedDate])


    return (
        <View>
            <View style={{ gap: 5, }}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity
                    onPress={() => setIsCalendarVisible(true)}
                    style={styles.btn}
                >
                    <Text style={styles.btn_text}>{selectedDate.year + '/' + selectedDate.month + '/' + selectedDate.day}</Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                visible={isCalendarVisible}
                animationType="slide"
                onRequestClose={() => setIsCalendarVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Calendar
                            style={{ width: 300 }}
                            monthFormat="MMMM yyyy"
                            onDayPress={handleDayPress}
                            markedDates={{
                                [`${selectedDate.year}-${selectedDate.month
                                    .toString().padStart(2, "0")}-${selectedDate.day
                                        .toString()
                                        .padStart(2, "0")}`]: {
                                    selected: true,
                                    selectedColor: theme_clr_10,
                                },
                            }}
                            theme={{
                                backgroundColor: "#ffffff", // Background color of the calendar
                                calendarBackground: theme_clr_dull_white, // Background color of the main calendar view
                                textSectionTitleColor: theme_clr_10, // Color of month title (e.g., "February 2024")
                                selectedDayBackgroundColor: "red", // Background color of the selected day
                                selectedDayTextColor: "#ffffff", // Text color of the selected day
                                todayTextColor: theme_clr_10, // Color of today's date
                                dayTextColor: theme_clr_1, // Color of regular day numbers
                                textDisabledColor: "#d9e1e8", // Color of disabled days (e.g., past dates)
                                dotColor: "#00adf5", // Color of dots in marked dates
                                selectedDotColor: "#ffffff", // Color of dots in selected day
                                arrowColor: theme_clr_1, // Color of navigation arrows
                                disabledArrowColor: "#d9e1e8", // Color of disabled navigation arrows
                                monthTextColor: theme_clr_1, // Color of the month text
                                indicatorColor: theme_clr_1, // Color of loading indicator (when switching months)
                                textDayFontFamily: Montserrat_Regular, // Font family for days
                                textMonthFontFamily: Montserrat_Bold, // Font family for month title
                                textDayHeaderFontFamily: Montserrat_Bold, // Font family for weekdays (e.g., Sun, Mon)
                                textDayFontSize: 18, // Font size of days
                                textMonthFontSize: 15, // Font size of the month title
                                textDayHeaderFontSize: 12, // Font size of weekday labels
                            }}
                        />

                        <View style={{ marginVertical: 15 }}>

                            <AppButton
                                on_press={() => setIsCalendarVisible(false)}
                                text={'Close'}
                                fsize={14}
                                fstyle={'regular'}
                                text_color={'#fff'}
                                border={8}
                                boxwidth={70}
                                btn_height={10}
                                background_color={theme_clr_10}
                            />
                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    );
};

export default CaledarModal;

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        alignSelf: "flex-start",
        color: theme_clr_medium_grey,
        fontFamily: Montserrat_Regular
    },
    btn: {
        backgroundColor: theme_clr_dull_white,
        padding: 14,
        borderRadius: 8,
        alignItems: "flex-start",
    },
    btn_text: {
        color: theme_clr_medium_grey,
        fontSize: 14,
        fontFamily: Montserrat_Regular
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.6)",
    },
    modalContent: {
        backgroundColor: theme_clr_dull_white,
        // padding: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: theme_clr_light_grey,
        width: 320,
        alignItems: "center",
        overflow: "hidden",
    },


});
