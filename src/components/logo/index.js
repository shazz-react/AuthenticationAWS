import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.container2}>
          <View style={styles.subContainer2}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Shazz React</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Logo;
