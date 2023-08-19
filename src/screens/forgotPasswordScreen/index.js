import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButtom';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const onSendPressed = async () => {
    try {
      const response = await Auth.forgotPassword(username);
      console.log(response);
    } catch (error) {
      Alert.alert('Oops', e.message);
    }
    navigation.navigate('NewPassword', {username: username});
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
          Reset your password
        </Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
        />
        <CustomButton text="Send" onPress={onSendPressed} />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
