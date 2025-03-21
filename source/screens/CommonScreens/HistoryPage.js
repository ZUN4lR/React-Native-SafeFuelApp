import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Poppins_Regular, theme_clr_10_transparent_0, theme_clr_dark, theme_clr_white } from '../../../style_sheet/styles';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../../My_components/Header/AppHeader';
import HistoryCard from '../../My_components/Cards/HistoryCard';
import ReceiptModal from '../../My_components/Modals/ReceiptModal';

const HistoryPage = () => {
  const [historydata, setHistorydata] = useState([
    { fuel_type: 'Petrol', quantity: 5000, price: 120000, status: 'Delivered',delivery_address:'Street#56 Islamabad', order_number: '#236554',schedule_date_time:"2025-03-17 12:30:00",last_order_date:"2025-05-12 12:30:00" },
    { fuel_type: 'Gas', quantity: 54000, price: 176000, status: 'Canceled',delivery_address:'Street#56 Rawalpindi', order_number: '#34343',schedule_date_time:"2025-02-17 14:30:00",last_order_date:"2025-05-12 14:30:00" },
    { fuel_type: 'Diesel', quantity: 15000, price: 150000, status: 'Delivered',delivery_address:'Street#56 Islamabad', order_number: '#67554',schedule_date_time:"2025-03-27 22:30:00",last_order_date:"2025-05-22 22:30:00" },
    { fuel_type: 'Petrol', quantity: 76000, price: 100000, status: 'Delivered',delivery_address:'Street#56 Lahore', order_number: '#89554',schedule_date_time:"2025-03-11 10:30:00",last_order_date:"2025-05-12 10:30:00" },
    { fuel_type: 'Gas', quantity: 54000, price: 176000, status: 'Canceled',delivery_address:'Street#56 Islamabad', order_number: '#34343',schedule_date_time:"2025-02-17 14:30:00",last_order_date:"2025-05-12 14:30:00" },
    { fuel_type: 'Gas', quantity: 54000, price: 176000, status: 'Canceled',delivery_address:'Street#56 Karachi', order_number: '#34343',schedule_date_time:"2025-02-17 14:30:00",last_order_date:"2025-05-12 14:30:00" },
    { fuel_type: 'Diesel', quantity: 15000, price: 150000, status: 'Delivered',delivery_address:'Street#56 Karachi', order_number: '#67554',schedule_date_time:"2025-03-27 22:30:00",last_order_date:"2025-05-22 22:30:00" },
    { fuel_type: 'Petrol', quantity: 76000, price: 100000, status: 'Delivered',delivery_address:'Street#56 Queeta', order_number: '#89554',schedule_date_time:"2025-03-11 10:30:00",last_order_date:"2025-05-12 10:30:00" },
  ]);

  const [orderreciept, setorderreciept] = useState(null);
  const [recieptmodal, setRecieptmodal] = useState(false);

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
      <AppHeader heading={'History'} />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 10,paddingTop:10, paddingBottom: 60 }} showsVerticalScrollIndicator={false}>
        {historydata.map((item, index) => (
          <HistoryCard 
            key={index} 
            on_press={() => { 
              setorderreciept(item); 
              setRecieptmodal(true);  // Open modal when clicking a card
            }} 
            history={item} 
          />
        ))}

        {historydata.length === 0 && (
          <Text style={{ fontSize: 20, fontFamily: Poppins_Regular, color: theme_clr_dark, paddingTop: 50, textAlign: 'center' }}>
            No History Available!
          </Text>
        )}
      </ScrollView>

      <ReceiptModal 
        visible={recieptmodal} 
        order={orderreciept} 
        onClose={() => setRecieptmodal(false)} 
      />
    </LinearGradient>
  );
};

export default HistoryPage;
