/* eslint-disable prettier/prettier */
import React from 'react';
import { news } from '../../utils/auth';
import { useState, useEffect } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Card } from '../Card/Card';
import { styles } from '../../style/news';
import { Header } from '../Header/Header';
/* import { usePagination } from 'react-use-pagination'; */
import { Navigation } from 'react-native-navigation';
import { Box, NativeBaseProvider } from "native-base";
export const fakeArr = [
  {
    id: 1,
    title: 'Какой-то текст',
    short_text: 'Еще какой-то текст',
    image_url: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'
  },
  {
    id: 2,
    title: 'Какой-то текст',
    short_text: 'Еще какой-то текст',
    image_url: 'https://instapik.ru/wp-content/uploads/2020/10/favicon-2.png'
  },
  {
    id: 3,
    title: 'Какой-то текст',
    short_text: 'Еще какой-то текст',
    image_url: 'https://bipbap.ru/wp-content/uploads/2020/03/Krasivye-kartinki-skvishi-iz-bumagi-dlya-srisovki-ili-raspechatki-17-1.jpg'
  },
  {
    id: 4,
    title: 'Какой-то текст',
    short_text: 'Еще какой-то текст',
    image_url: 'https://bipbap.ru/wp-content/uploads/2020/03/Krasivye-kartinki-skvishi-iz-bumagi-dlya-srisovki-ili-raspechatki-17-1.jpg'
  },
  {
    id: 5,
    title: 'Какой-то текст',
    short_text: 'Еще какой-то текст',
    image_url: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'
  },
]
export const News = () => {
  /*  const [uncos, setUncos] = useState([]); */

  /* const getNews = async () => {
    let response = await news();
    setUncos(response.data.news.concat(response.data.news));
  };
  useEffect(() => {
    getNews();
  }, []); */
  /*   const {
      currentPage,
      totalPages,
      setNextPage,
      setPreviousPage,
      nextEnabled,
      previousEnabled,
      startIndex,
      endIndex,
      setPage,
    } = usePagination({ totalItems: uncos.length, initialPageSize: 10 }); */

  function handleNavigate(id, title) {
    console.log(id)
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
    if (last > fakeArr.length) {
      setFirst(0)
      setLast(fakeArr.length)
    } else {
      setLast(last + 2)
    }

  }
  return (
    <NativeBaseProvider>
    <Box style={styles.news}>
      <Header />
      <Box >
        {/* <Box style={styles.content}> */}
        
          <SafeAreaView style={styles.container}>
            {/* {uncos.slice(startIndex, endIndex + 1).map(card => (
              <Card
                key={card.id}
                card={card}
                handleNavigate={handleNavigate}
                navigate="true"
              />
            ))} */}
            
            <FlatList
            /* ListHeaderComponent={<Header/>} */
              data={fakeArr.slice(first, last)}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              onEndReached={endScroll}
            />
          </SafeAreaView>
          {/* <View style={styles.paginate}>
            <View style={styles.button}>
              <Button
                onPress={setPreviousPage}
                disabled={!previousEnabled}
                title="Предыдущая страница"
              />
            </View>
            <View style={styles.paginate__buttons}>
              {[...Array(totalPages).keys()].map(el => (
                <Text
                  style={
                    styles[
                    `${el === currentPage
                      ? 'paginate__item'
                      : 'paginate__item_disabled'
                    }`
                    ]
                  }
                  onPress={() => setPage(el)}
                  key={el}
                  disabled={el === currentPage ? true : false}>
                  {el + 1}
                </Text>
              ))}
            </View>
            <View style={styles.button}>
              <Button
                onPress={setNextPage}
                disabled={!nextEnabled}
                title="Следующая страница"
              />
            </View>
          </View> */}
        {/* </Box> */}
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