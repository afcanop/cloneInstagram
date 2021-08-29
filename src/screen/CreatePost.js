import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  /*padding-top: ${props => props.paddingTop}px;*/
`;

const CreatePost = () => {
  return (
    <Container>
      <Text>CreatePost</Text>
    </Container>
  );
};

export default CreatePost;
