import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  container_PRIMARY: {
    backgroundColor: 'cornflowerblue',
  },
  container_SECONDARY: {
    borderColor: 'cornflowerblue',
    borderWidth: 2,
  },
  container_TERTIARY: {
    // backgroundColor: '',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    color: 'cornflowerblue',
  },
  text_TERTIARY: {
    color: 'grey',
  },
});

export default styles;
