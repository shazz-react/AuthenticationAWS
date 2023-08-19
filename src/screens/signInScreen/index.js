import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/customInput';
import Logo from '../../components/logo';
import CustomButton from '../../components/customButtom';
import SocialSignInButtons from '../../components/socialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const onSignInPressed = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signIn(username, password);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const forgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const createAccount = () => {
    navigation.navigate('SignUp');
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
        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={() => onSignInPressed()}
        />
        <CustomButton
          text="Forgot Password"
          onPress={forgotPassword}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={createAccount}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
