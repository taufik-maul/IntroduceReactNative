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
  TouchableOpacity,
} from 'react-native';

import styles from './assets/styles';
import ListTodo from './component/ListTodo';
import FormTodo from './component/FormTodo';

const App = () => {
  const [listNgapain, setlistNgapain] = useState([]);

  const setNewData = (newData) => {
    setlistNgapain([...listNgapain, newData]);
  }

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.h1}>What im Doing</Text>
          <FormTodo setlistNgapain={(newData) => setNewData(newData)} />
          <ListTodo listNgapain={listNgapain} callbackClearList={() => setlistNgapain([])} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
