/* eslint-disable prettier/prettier */
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import { Login } from '../components/Login/Login'
import { News } from '../components/News/News'
import { NewsPage } from '../components/NewsPage/NewsPage'
function registerScreen(name, Component) {
  Navigation.registerComponent(
    name,
    () => props =>
    (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    ),
    () => Component,
  )
}
export const register = () => {
  registerScreen('Login', Login)
  registerScreen('News', News)
  registerScreen('NewsPage', NewsPage)
}
export const newsRoot = {
  root: {
    stack: {
      id: 'News',
      children: [
        {
          component: {
            name: 'News',
          },
        },
      ],
    },
  },
};
export const loginRoot = {
  root: {
    stack: {
      id: 'Main',
      children: [
        {
          component: {
            name: 'Login',
          },
        },
      ],
    },
  },
};
