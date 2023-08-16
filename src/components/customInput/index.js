import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const CustomInput = ({value, setvalue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setvalue}
        placeholder={placeholder}
        style={{height: 30}}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
