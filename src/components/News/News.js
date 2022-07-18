/* eslint-disable prettier/prettier */
import React from 'react';
import { news } from '../../utils/auth';
import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Card } from '../Card/Card';
import { styles } from '../../style/news';
import { Header } from '../Header/Header';
import { Navigation } from 'react-native-navigation';
import { Box, NativeBaseProvider } from "native-base";
export const News = () => {
   const [uncos, setUncos] = useState([]);

  const getNews = async () => {
    let response = await news();
    setUncos(response.data.news);
  };
  useEffect(() => {
    getNews();
  }, []);
  function handleNavigate(id, title) {
    Navigation.push('News', {
      component: {
        name: 'NewsPage',
        id: 'NewsPage',
        options: {
          topBar: {
            title: {
              text: title,
            }
          }
        },
        passProps: {
          id: id,
        },
      },
    })
  }
  const renderItem = ({ item }) => (
    <Card card={item} handleNavigate={handleNavigate}
      navigate="true" />
  );
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(2);
  function endScroll() {
    if (last > uncos.length) {
      setFirst(0)
      setLast(uncos.length)
    } else {
      setLast(last + 2)
    }

  }
  return (
    <NativeBaseProvider>
    <Box style={styles.news}>
      <Header />
      <Box >
          <SafeAreaView style={styles.container}>
            <FlatList
              data={uncos.slice(first, last)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              onEndReached={endScroll}
            />
          </SafeAreaView>
      </Box>
    </Box>
    </NativeBaseProvider>
  );
};
News.options = {
  topBar: {
    title: {
      text: 'Новости',
    },
  },
}