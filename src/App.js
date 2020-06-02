/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import styles from './assets/styles';

const App = () => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.h1}>Login</Text>
          <View style={styles.formWrapper}>
            <View style={styles.field}>
              <Text style={styles.label}>Username</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                style={styles.input}
              />
            </View>
            <View style={styles.field}>
              <Button
                style={styles.primaryButton}
                color="#fc6f03"
                title="Login"
                onPress={() => Alert.alert('Passwordnya Salah Bro !!!')}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
