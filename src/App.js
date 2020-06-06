/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import TextField from './component/TextField/TextField';
import {
  Platform,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  Picker,
  TouchableOpacity,
} from 'react-native';

import styles from './assets/styles';
import fieldStyle from './component/TextField/styles';

const App = () => {
  const [ngapain, setNgapain] = useState(Platform.OS === 'ios' ? '' : null);
  const [status, setStatus] = useState('sudah');
  const [listNgapain, setlistNgapain] = useState([]);
  const [date, setDate] = useState(new Date());

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const masukinNgapain = () => {
    setlistNgapain([...listNgapain, {ngapain: ngapain, status: status}]);
    resetState();
  };

  const resetState = () => {
    setNgapain('');
    setStatus('sudah');
  };

  const clearList = () => {
    setlistNgapain([]);
  };

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.h1}>What im Doing</Text>
          <View style={styles.formWrapper}>
            <TextField
              label="Mau Ngapain ?"
              value={ngapain}
              callbackField={(value) => setNgapain(value)}
            />
            <View style={fieldStyle.field}>
              <Text style={fieldStyle.label}>Status</Text>
              <Picker
                status={status}
                onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}>
                <Picker.Item label="Sudah" value="sudah" />
                <Picker.Item label="Belum" value="belum" />
              </Picker>
            </View>
            <View style={fieldStyle.field}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                is24Hour={true}
                display="default"
                onChange={onChangeDate}
              />
            </View>

            <View style={fieldStyle.field}>
              <Button
                style={styles.primaryButton}
                color="#fc6f03"
                title="Masukin"
                onPress={masukinNgapain}
              />
            </View>
            <View style={fieldStyle.field}>
              <Text style={styles.h1}>List Doing</Text>
              {listNgapain.length ? (
                <TouchableOpacity onPress={clearList}>
                  <Text>Clear List</Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
              {listNgapain.length ? (
                listNgapain.map((ngapainAja) => (
                  <View key={ngapainAja.key}>
                    <Text>Ngapain Aja : {ngapainAja.ngapain}</Text>
                    <Text>Status : {ngapainAja.status}</Text>
                  </View>
                ))
              ) : (
                <Text>Masukin loe mau ngapain aja cuy ?</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
