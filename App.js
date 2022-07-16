import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Login} from './src/components/Login/Login';
import {News} from './src/components/News/News';
import {NewsPage} from './src/components/NewsPage/NewsPage';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';

Navigation.registerComponent(
  'Login',
  () => props =>
    (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Login {...props} />
        </PersistGate>
      </Provider>
    ),
  () => Login,
);

Navigation.registerComponent(
  'News',
  () => props =>
    (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <News {...props} />
        </PersistGate>
      </Provider>
    ),
  () => News,
);
Navigation.registerComponent(
  'NewsPage',
  () => props =>
    (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NewsPage {...props} />
        </PersistGate>
      </Provider>
    ),
  () => NewsPage,
);

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
Navigation.setDefaultOptions({
  topBar: {
    title: {
      color: 'black',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: 'rgb(25, 118, 210)',
    },
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(loginRoot);
});
