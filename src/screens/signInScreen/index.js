import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/customInput';
import Logo from '../../components/logo';
import CustomButton from '../../components/customButtom';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign In');
  };

  const forgotPassword = () => {
    console.warn('Forgot password');
  };

  return (
    <ScrollView>
      <View style={{alignItems: 'center', padding: 20}}>
        <Logo />
        <CustomInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot Password"
          onPress={forgotPassword}
          type="TERTIARY"
        />
        <CustomButton
          text="Sign in with Facebook"
          onPress={forgotPassword}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign in with Google"
          onPress={forgotPassword}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign in with Apple"
          onPress={forgotPassword}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={forgotPassword}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
