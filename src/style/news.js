/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  news: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '90%',
    display: 'flex',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginate: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 120,
  },
  paginate__item: {
    width: 40,
    height: 50,
    textAlign: 'center',
    borderWidth: 1,
    textAlignVertical: 'center',
    backgroundColor: '#94b0ff',
  },
  paginate__item_disabled: {
    backgroundColor: '#ffffff',
    width: 40,
    height: 50,
    textAlign: 'center',
    borderWidth: 1,
    textAlignVertical: 'center',
  },
  paginate__buttons: {
    width: 140,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 5,
  },
});
