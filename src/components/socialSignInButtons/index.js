import React from 'react';
import CustomButton from '../customButtom';

const SocialSignInButtons = () => {
  const onSignInWithFacebook = () => {
    console.warn('Sign In with Facebook');
  };

  const onSignInWithGoogle = () => {
    console.warn('Sign In with Google');
  };

  const onSignInWithApple = () => {
    console.warn('Sign In with Apple');
  };

  return (
    <>
      <CustomButton
        text="Sign in with Facebook"
        onPress={onSignInWithFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign in with Google"
        onPress={onSignInWithGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign in with Apple"
        onPress={onSignInWithApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
