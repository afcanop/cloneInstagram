/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text} from 'react-native';
import styled from 'styled-components';
import useSWR from 'swr';
import {fetcher} from '../commons/utils';
import {Post, Header} from '../components';

const Container = styled.View`
  flex: 1;
  /*padding-top: ${props => props.paddingTop}px;*/
`;
const home = () => {
  const url = 'http://jsonplaceholder.typicode.com/photos?_start=0&_limit=20';

  const {data, error} = useSWR(url, fetcher, {
    fallbackData: [],
    revalidateOnMount: true,
  });

  return (
    <Container>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {React.Children.toArray(
          data.map(item => {
            return <Post imageUrl={item.thumbnailUrl} />;
          }),
        )}
      </ScrollView>
    </Container>
  );
};

export default home;
