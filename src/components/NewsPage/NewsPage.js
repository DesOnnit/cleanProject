/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Header} from '../Header/Header';
import {oneNews} from '../../utils/auth';
import {useEffect, useState} from 'react';
import {Card} from '../Card/Card';
import {View} from 'react-native';
export const NewsPage = ({id}) => {
  const [news, setNews] = useState({});
  const getNews = async () => {
    let response = await oneNews(id);
    setNews(response.data.news);
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <View style={{display:'flex',alignItems: 'center',justifyContent: 'center'}}>
      <Header />
      <Card card={news} />
    </View>
  );
};
