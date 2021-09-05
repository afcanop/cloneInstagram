import React from 'react';
import {Image, View} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuxRow} from '../commons/componentes/auxStyles';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 16px;
  padding-bottom: 6px;
`;

const Logo = styled.Image`
  height: 30px;
  width: 100px;
`;

const Accion = styled.TouchableOpacity`
  margin-right: ${({hasMargin}) => (hasMargin ? '17px' : 0)};
`;

const Header = () => {
  return (
    <Container>
      <Accion>
        <Ionicons name="camera-outline" size={26} />
      </Accion>
      <Logo
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png',
        }}
      />
      <AuxRow>
        <Accion>
          <Ionicons name="monitor" size={26} />
        </Accion>
        <Accion>
          <Ionicons name="share-outline" size={26} />
        </Accion>
      </AuxRow>
    </Container>
  );
};

export default Header;
