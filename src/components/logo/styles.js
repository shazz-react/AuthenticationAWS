import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 160,
    borderRadius: 80,
    backgroundColor: 'black',
    justifyContent: 'center',
    marginVertical: 40,
  },
  subContainer: {
    height: 130,
    width: 130,
    borderRadius: 65,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
  },
  textContainer: {
    height: 40,
    width: 110,
    borderRadius: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'white', fontSize: 15},
});

export default styles;
