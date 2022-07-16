import React from 'react';
import {News} from '../components/News/News';
import {Login} from '../components/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import {NewsPage} from '../components/NewsPage/NewsPage';
const Stack = createNativeStackNavigator();
export default function Navigate() {
  const login = useSelector(state => state.login);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!login ? (
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{title: 'Авторизация'}}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="News"
              component={News}
              options={{title: 'Новости'}}
            />
            <Stack.Screen
              name="NewsPage"
              component={NewsPage}
              options={{title: 'Выбранная новость'}}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
