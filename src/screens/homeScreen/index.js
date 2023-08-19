import {Auth} from 'aws-amplify';
import react from 'react';
import {Button, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Logout"
        onPress={() => {
          try {
            Auth.signOut();
          } catch (e) {}
        }}
      />
    </View>
  );
};

export default HomeScreen;
