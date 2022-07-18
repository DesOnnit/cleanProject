/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {StyleSheet} from 'react-native';
import {login} from '../../style/login';
import {auth} from '../../utils/auth';
import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {newsRoot} from '../../utils/navigate';
import { Input, Box, NativeBaseProvider,Button,Text  } from "native-base";
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login);
  function handleChangeEmail(text) {
    setEmail(text);
  }
  function handleChangePassword(text) {
    setPassword(text);
  }
  const handleLogin = async (email, password) => {
    setLoading(true)
    const response = await auth(email, password);
    if (response.ok) {
      dispatch({
        type: 'login',
        payload: {
          user: response.data.user,
          data: {
            accessToken: response.headers['access-token'],
            client: response.headers.client,
            uid: response.headers.uid,
          },
        },
      });
    }
    setLoading(false)
  };
  useEffect(()=>{
  if(isLogin){
    Navigation.setRoot(newsRoot)
  }
  },[isLogin])
  return (
    <NativeBaseProvider>
    <Box style={styles.login}>
      <Box style={styles.form}>
        <Text style={styles.title}>Вход</Text>
        <Box style={styles.inputs}>
          <Input
            value={email}
            placeholder="Введите ваш e-mail"
            onChangeText={handleChangeEmail}
          />
          <Input
            value={password}
            placeholder="Введите ваш пароль"
            onChangeText={handleChangePassword}
          />
        </Box>
        <Button isLoading={loading} colorScheme="rgb(25, 118, 210)"  onPress={() => handleLogin(email, password)}>Войти</Button>
      </Box>
    </Box>
    </NativeBaseProvider>
  );
};
Login.options = {
    topBar: { visible: false },
 }
 
const styles = StyleSheet.create(login);
