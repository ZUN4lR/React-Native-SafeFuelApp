import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Montserrat_Bold, Montserrat_Regular, Poppins_Bold, theme_clr_10, theme_clr_3, theme_clr_5, theme_clr_dark, theme_clr_matte, theme_clr_white, width } from '../../../style_sheet/styles';
import IconComponent from '../Icon_Component/IconComponent';

const ReceiptModal = ({ visible, onClose, order }) => {
    if (!order) return null;

    const dateObj_scheduled = new Date(order.schedule_date_time);
    const dateObj_last = new Date(order.last_order_date);

    const formattedDate_scheduled = dateObj_scheduled.toLocaleString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
    });
    const formattedDate_last = dateObj_last.toLocaleString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
    });

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide">
            <View style={styles.modalContainer}>


                <View style={styles.modalContent}>
                    <View style={{ flexDirection: 'row', gap: 1, left: -25 }}>
                        {Array(15).fill(null).map((_, index) => (
                            <View key={index} style={{ height: 5, width: width / 12, backgroundColor: '#353535ef' }} />
                        ))}
                    </View>

                    <ScrollView style={{ height: '90%', padding: 20 }}>

                        <TouchableOpacity
                            onPress={onClose}
                            style={styles.close_btn}>
                            <IconComponent name={'Ionicons'} icon={'close'} size={30} color={theme_clr_matte} />
                        </TouchableOpacity>



                        <View style={{ backgroundColor: order.status === 'Delivered' ? theme_clr_3 : theme_clr_5, alignSelf: 'center', borderRadius: 100, padding: 5 }}>
                            <IconComponent name={'Ionicons'} icon={order.status === 'Delivered' ? 'checkmark' : 'close'} size={30} color={theme_clr_white} />
                        </View>

                        <Text style={styles.title}>{order.status == 'Delivered' ? `Delivered Successfully` : `Order was Canceled`}</Text>

                        <View style={{ gap: 5, paddingVertical: 20 }}>
                            <Text style={styles.label}>Order: <Text style={styles.value}>{order.order_number}</Text></Text>
                            <Text style={styles.label}>Fuel Type: <Text style={styles.value}>{order.fuel_type}</Text></Text>
                            <Text style={styles.label}>Quantity: <Text style={styles.value}>{order.quantity} Liters</Text></Text>
                            <Text style={styles.label}>Price: <Text style={styles.value}>{order.price} PKR</Text></Text>
                            <Text style={styles.label}>Address: <Text style={styles.value}>{order.delivery_address}</Text></Text>
                            <Text style={styles.label}>Status: <Text style={[styles.value, order.status === 'Delivered' ? styles.delivered : styles.canceled]}>{order.status}</Text></Text>
                            <Text style={styles.label}>Schedule Date: <Text style={styles.value}>{formattedDate_scheduled}</Text></Text>
                            <Text style={styles.label}>{order.status} Date: <Text style={styles.value}>{formattedDate_last}</Text></Text>
                        </View>



                    </ScrollView>
                    <View style={{ flexDirection: 'row', gap: 1, left: -25, bottom: -1 }}>
                        {Array(15).fill(null).map((_, index) => (
                            <View key={index} style={{ height: 5, width: width / 12, backgroundColor: '#353535ef' }} />
                        ))}
                    </View>

                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#353535ef',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        marginVertical: 20,
        overflow: 'hidden',
        // borderRadius: 10,
    },
    close_btn: {
        position: 'absolute',
        alignSelf: 'flex-end',
        padding: 10,
        top: -20,
        right: -20
    },
    title: {
        fontSize: 22,
        fontFamily: Montserrat_Regular,
        color: theme_clr_dark,
        textAlign: 'center',
        marginVertical: 10
    },
    label: {
        fontSize: 16,
        fontFamily: Montserrat_Bold,
        color: theme_clr_dark,
        marginVertical: 5
    },
    value: {
        fontFamily: Montserrat_Regular,
        color: theme_clr_matte,
        fontSize: 14
    },
    delivered: {
        color: theme_clr_3
    },
    canceled: {
        color: theme_clr_5
    },

});

export default ReceiptModal;
