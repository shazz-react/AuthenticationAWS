import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const CustomInput = ({
  value,
  setvalue,
  placeholder,
  secureTextEntry,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setvalue}
        placeholder={placeholder}
        style={{height: 36}}
        secureTextEntry={secureTextEntry}
        editable={!disabled}
      />
    </View>
  );
};

export default CustomInput;
