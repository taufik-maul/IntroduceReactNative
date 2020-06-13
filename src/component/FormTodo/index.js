import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TextField from '../TextField/TextField';
import RNPickerSelect from 'react-native-picker-select';
import {formatDate, now} from '../../helper/date';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

const FormTodo = ({setlistNgapain}) => {
    const [ngapain, setNgapain] = useState(Platform.OS === 'ios' ? '' : null);
    const [status, setStatus] = useState('sudah');
    const [date, setDate] = useState(now);
    const [show, setShow] = useState(false);

    const masukinNgapain = () => {
        setlistNgapain({ngapain: ngapain, status: status, tanggal: formatDate(date)})
        resetState();
    };
  
    const onChangeDate = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };

    const resetState = () => {
        setNgapain('');
        setStatus('sudah');
        setDate(now)
    };

    return (
        <View>
            <View style={styles.fieldGroup}>
                <View style={styles.field}>
                    <TextField
                        label="Mau Ngapain ?"
                        value={ngapain}
                        callbackField={(value) => setNgapain(value)}
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Status</Text>
                    <RNPickerSelect
                        style={styles.input}
                        placeholder="pilih ya statusnya"
                        useNativeAndroidPickerStyle={false}
                        textInputProps={{ underlineColorAndroid: '#777' }}
                        onValueChange={(value) => setStatus(value)}
                        items={[
                            { label: 'Sudah', value: 'sudah' },
                            { label: 'Belum', value: 'belum' },
                        ]} />
                </View>
            </View>
            <View style={styles.field}>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  is24Hour={true}
                  display="default"
                  onChange={onChangeDate}
                />
              )}
              <Text style={styles.label}>Tanggal</Text>
              <TouchableOpacity  style={styles.input} onPress={() => setShow(true)}><Text>{formatDate(date)}</Text></TouchableOpacity>
            </View>
            <View style={styles.field}>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => {masukinNgapain()}}
              ><Text>Masukin</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default FormTodo;