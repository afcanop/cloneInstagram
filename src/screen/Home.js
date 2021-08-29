import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  /*padding-top: ${props => props.paddingTop}px;*/
`;
const home = () => {
  return (
    <Container>
      <Text>home</Text>
    </Container>
  );
};

export default home;
