/* eslint-disable prettier/prettier */
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, Image, Button} from 'react-native';
import {styles} from '../../style/header';
import { Navigation } from 'react-native-navigation';
import { loginRoot } from '../../utils/navigate';
export const Header = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({type: 'logout'});
    Navigation.setRoot(loginRoot)
  };
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Image source={{uri: user.avatar_url}} style={styles.avatar} />
          <Text>{user.username}</Text>
        </View>
        <Button onPress={handleLogout} color="red" title="ВЫХОД" />
      </View>
    </View>
  );
};
