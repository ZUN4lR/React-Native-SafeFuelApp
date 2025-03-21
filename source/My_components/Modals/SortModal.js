import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Montserrat_Regular, theme_clr_dull_white, theme_clr_light_grey, theme_clr_medium_grey, theme_clr_white } from '../../../style_sheet/styles';

const SortModal = ({ visible, onClose,selected_option }) => {
    const options = ['Importance', 'Time', 'Type', 'Building']

    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Sort by</Text>

                    {options.map((option, index) => (
                        <TouchableOpacity key={index} style={styles.option}
                            onPress={()=>{selected_option(option);onClose()}}>
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}

                </View>

                <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>


            </View>
        </Modal>
    );
};

export default SortModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 20,
        gap: 20,
        paddingVertical: 15
    },
    modalContent: {
        backgroundColor: theme_clr_white,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 12,
        fontFamily: Montserrat_Regular,
        color: theme_clr_light_grey,
        marginVertical: 12,
    },
    option: {
        width: '100%',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 14,
        fontFamily: Montserrat_Regular,
        color: theme_clr_medium_grey,
    },
    cancelButton: {
        backgroundColor: 'white',
        paddingVertical: 12,
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
    },
    cancelText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },

});

