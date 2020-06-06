import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const TextField = ({label, callbackField, value}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={(text) => {
          callbackField(text);
        }}
        style={styles.input}
      />
    </View>
  );
};

export default TextField;
