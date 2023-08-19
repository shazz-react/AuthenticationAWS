import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButtom';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const NewPasswordScreen = ({route}) => {
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const onSubmitPressed = async () => {
    try {
      const response = await Auth.forgotPasswordSubmit(
        route.params.username,
        code,
        password,
      );
      console.log(response);
    } catch (error) {
      Alert.alert('Oops', e.message);
    }
    navigation.navigate('SignIn');
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
        <CustomInput value={route.params.username} setvalue={setCode} />
        <CustomInput placeholder="Code" value={code} setvalue={setCode} />
        <CustomInput
          placeholder="Enter your new password"
          value={password}
          setvalue={setPassword}
        />
        <CustomButton text="Submit" onPress={onSubmitPressed} />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;
