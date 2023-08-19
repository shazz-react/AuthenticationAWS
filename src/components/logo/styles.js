import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 160,
    borderRadius: 80,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    marginVertical: 40,
  },
  subContainer: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    height: 120,
    width: 120,
    borderRadius: 65,
    backgroundColor: 'darkseagreen',
    justifyContent: 'center',
    marginVertical: 40,
    alignItems: 'flex-end',
  },
  subContainer2: {
    height: 110,
    width: 110,
    borderRadius: 55,
    backgroundColor: 'ghostwhite',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: 30,
    width: 90,
    borderRadius: 20,
    backgroundColor: '#E7EAF4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'cornflowerblue', fontSize: 12, fontWeight: '900'},
});

export default styles;
