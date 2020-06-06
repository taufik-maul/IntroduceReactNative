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
  Alert,
} from 'react-native';

import styles from './assets/styles';

const App = () => {
  const [username, setUsername] = useState(Platform.OS === 'ios' ? '' : null);
  const [firstName, setFirstName] = useState('');
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.h1}>Login</Text>
          <View style={styles.formWrapper}>
            <TextField
              label="Username"
              callbackField={(value) => setUsername(value)}
            />
            <TextField
              label="First Name"
              callbackField={(value) => setFirstName(value)}
            />

            <View style={styles.field}>
              <Button
                style={styles.primaryButton}
                color="#fc6f03"
                title="Login"
              />
            </View>

            <Text>{username}</Text>
            <Text>{firstName}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
