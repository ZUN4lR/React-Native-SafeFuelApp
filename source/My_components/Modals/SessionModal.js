import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Montserrat_Bold, Montserrat_Regular, theme_clr_3, theme_clr_dull_white, theme_clr_grey_2, theme_clr_light_grey, theme_clr_medium_grey, theme_clr_white } from '../../../style_sheet/styles';
import AppButton from '../Buttons/AppButton';

const SessionModal = ({ visible, onClose, selected_option }) => {

    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>

                    <Text style={styles.title}>Do you really want to end the session?</Text>

                    <AppButton
                        on_press={() => { selected_option('yes'); onClose() }}
                        text={'Yes'}
                        fsize={14}
                        fstyle={'regular'}
                        text_color={theme_clr_medium_grey}
                        border={8}
                        border_color={theme_clr_grey_2}
                        btn_height={14}
                        background_color={theme_clr_white}
                    />

                    <AppButton
                        on_press={() => { selected_option('no'); onClose() }}
                        text={'No'}
                        fsize={14}
                        fstyle={'regular'}
                        text_color={theme_clr_medium_grey}
                        border={8}
                        btn_height={14}
                        background_color={theme_clr_grey_2}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default SessionModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        // alignItems: 'center',
        backgroundColor: theme_clr_white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingVertical: 40,
        paddingHorizontal: 20,
        gap: 10
    },
    title: {
        fontSize: 16,
        color: theme_clr_medium_grey,
        fontFamily: Montserrat_Bold,
        alignSelf: 'center',
        width: '50%',
        paddingBottom: 20
    },

});

