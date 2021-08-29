import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  /*padding-top: ${props => props.paddingTop}px;*/
`;
const Notifications = () => {
  return (
    <Container>
      <Text> Notifications</Text>
    </Container>
  );
};

export default Notifications;
