import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  /*padding-top: ${props => props.paddingTop}px;*/
`;
const Search = () => {
  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
};

export default Search;
