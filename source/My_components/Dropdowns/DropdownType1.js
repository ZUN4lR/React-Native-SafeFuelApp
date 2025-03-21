import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import {
    Montserrat_Bold,
    Montserrat_Regular,
    theme_clr_dull_white,
    theme_clr_grey_1,
    theme_clr_light_grey,
    theme_clr_medium_grey
} from '../../../style_sheet/styles';
import ArrowDown from '../../Assets/svg/ArrowDown.svg';

const DropdownType1 = ({ title = false, set_seleted_option, seleted_option, data_list, dropdown_height = 100, suffix = '' }) => {
    const [listvisibility, setListvisibility] = useState(false);

    useEffect(() => {
        set_seleted_option(data_list[0].data)

    }, [])



    return (
        <View style={{ gap: 5 }}>
            {title && <Text style={styles.title}>{title}</Text>}

            <TouchableOpacity
                onPress={() => setListvisibility(!listvisibility)}
                style={[styles.dropdown, { borderBottomLeftRadius: listvisibility ? 0 : 8, borderBottomRightRadius: listvisibility ? 0 : 8 }]}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.selected_text}>{seleted_option ? seleted_option : 0}{suffix}</Text>
                    <ArrowDown />
                </View>
            </TouchableOpacity>

            {/* Dropdown List (Animated) */}
            {listvisibility && (
                <Animatable.View
                    animation="fadeInDown"
                    duration={200}
                    style={[styles.dropdownList, { position: 'absolute', zIndex: 1, width: '100%', top: 69, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, maxHeight: dropdown_height }]}
                >
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        nestedScrollEnabled={true}
                        showsVerticalScrollIndicator={false}>
                        {Array.isArray(data_list) &&
                            data_list.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        set_seleted_option(item.data);
                                        setListvisibility(false);
                                    }}
                                >
                                    <Text style={styles.dropdownItem}>{item.data}{suffix}</Text>
                                </TouchableOpacity>
                            ))}
                    </ScrollView>
                </Animatable.View>
            )}
        </View>
    );
};

export default DropdownType1;

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        alignSelf: 'flex-start',
        color: theme_clr_medium_grey,
        fontFamily: Montserrat_Regular
    },
    dropdown: {
        borderWidth: 1,
        borderColor: theme_clr_grey_1,
        backgroundColor: theme_clr_dull_white,
        borderRadius: 8,
        padding: 14,
    },
    selected_text: {
        fontSize: 14,
        color: theme_clr_medium_grey,
        fontFamily: Montserrat_Regular
    },
    dropdownList: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: theme_clr_grey_1,
        backgroundColor: theme_clr_dull_white,
        marginTop: -5,
        overflow: 'hidden'
    },
    dropdownItem: {
        paddingVertical: 12,
        borderTopWidth: 1,
        borderColor: theme_clr_grey_1,
        textAlign: 'center',
        fontFamily: Montserrat_Bold,
        fontSize: 14,
        color: theme_clr_medium_grey
    }
});
