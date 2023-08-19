import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButtom';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const ConfirmEmailScreen = ({route}) => {
  console.log(route);
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = async () => {
    try {
      const response = await Auth.confirmSignUp(route?.params?.username, code);
      console.log(response);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    navigation.navigate('SignIn');
  };

  const onResendCodePressed = async () => {
    try {
      const response = await Auth.resendSignUp(route?.params?.username);
      console.log(response);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={{alignItems: 'center', padding: 20}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#051C60',
            margin: 10,
          }}>
          Confirm your email
        </Text>
        <CustomInput
          value={route?.params?.username}
          setvalue={setCode}
          disabled
        />
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setvalue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <CustomButton
          text="Resend code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
