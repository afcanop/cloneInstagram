import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  /*padding-top: ${props => props.paddingTop}px;*/
`;

const Profile = () => {
  //const {top} = useSafeAreaInsets();
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
};

export default Profile;
