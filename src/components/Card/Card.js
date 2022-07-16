/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../style/card';
import HTMLView from 'react-native-htmlview';
export const Card = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigate ? props.handleNavigate(props.card.id,props.card.title) : '';
      }}
      style={styles.card}>
      <Text style={styles.title}>{props.card.title}</Text>
      <Image
        source={{uri: props.card.image_url}}
        style={styles.img}
        resizeMode="contain"
      />
      <HTMLView style={styles.subtitle} value={props.card.short_text} />
    </TouchableOpacity>
  );
};
