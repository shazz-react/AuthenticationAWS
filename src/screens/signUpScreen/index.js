import React, {useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/customInput';
import Logo from '../../components/logo';
import CustomButton from '../../components/customButtom';
import styles from './styles';
import SocialSignInButtons from '../../components/socialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = async () => {
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
        },
      });
      // console.log(response);
      navigation.navigate('ConfirmEmail', {username});
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onPressTermsOfUse = () => {
    console.warn('Terms of Use pressed');
  };

  const onPressPrivacyPolicy = () => {
    console.warn('Privacy Policy pressed');
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
          Create an account
        </Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setvalue={setUsername}
        />
        <CustomInput placeholder="Name" value={name} setvalue={setName} />
        <CustomInput placeholder="Email" value={email} setvalue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat password"
          value={passwordRepeat}
          setvalue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onPressTermsOfUse}>
            Terms of Use
          </Text>{' '}
          and
          <Text style={styles.link} onPress={onPressPrivacyPolicy}>
            {' '}
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
