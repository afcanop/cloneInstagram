import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuxRow} from '../commons/componentes/auxStyles';

const sizes = Dimensions.get('screen');

const Container = styled.View``;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 11px 10px;
  align-items: center;
`;
const AutorAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: ${32 / 2}px;
  margin-right: 12px;
`;
const HeaderInfo = styled.View``;
const AuthorName = styled.Text`
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 1px;
`;
const PostLocation = styled.Text`
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.07px;
`;
const PostImagen = styled.Image`
  width: ${sizes.width}px;
  height: 375px;
`;
const PostAccion = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px 8px 14px;
`;
const Accion = styled.TouchableOpacity`
  margin-right: ${({hasMargin}) => (hasMargin ? '17px' : 0)};
`;

const Likes = styled.View`
  flex-direction: row;
  padding: 0 14px;
`;
const LikesImage = styled.Image`
  width: 17px;
  height: 17px;
  border-radius ${17 / 2}px;
  margin-right: 6.5px;
`;
const LikesText = styled.Text`
  font-size: 13px;
  line-height: 18px;
  letter-spacing -0.07px;
`;
const AuxTextBold = styled.Text`
  font-weight: bold;
`;

const Description = styled.Text`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.1px;
  padding: 0 14px;
`;
const Age = styled.Text`
  font-size: 11px;
  line-height: 13px;
  letter-spacing: -0.5px;
  padding: 0 14px;
  margin-bottom: 8px;
`;

const Post = ({imageUrl}) => {
  return (
    <Container>
      <Header>
        <AuxRow>
          <AutorAvatar source={{uri: imageUrl}} />
          <HeaderInfo>
            <AuthorName>Andres felipe</AuthorName>
            <PostLocation>Medellin, Colombia</PostLocation>
          </HeaderInfo>
        </AuxRow>
        <TouchableOpacity onPress={() => alert('asd')}>
          <Ionicons name="dots-vertical" size={24} />
        </TouchableOpacity>
      </Header>
      <PostImagen source={{uri: imageUrl}} />
      <PostAccion>
        <AuxRow>
          <Accion hasMargin>
            <Ionicons name="heart-outline" size={26} />
          </Accion>
          <Accion hasMargin>
            <Ionicons name="comment-outline" size={26} />
          </Accion>
          <Accion>
            <Ionicons name="share-outline" size={26} />
          </Accion>
        </AuxRow>
        <Ionicons name="bookmark-outline" size={26} />
      </PostAccion>
      <Likes>
        <LikesImage source={{uri: imageUrl}} />
        <LikesText>
          Like by <AuxTextBold>Andres felipe cano</AuxTextBold> and{' '}
          <AuxTextBold>15</AuxTextBold> peoples
        </LikesText>
      </Likes>
      <Description numberOfLines={3}>
        <AuthorName>Andres felipe</AuthorName> Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc vestibulum scelerisque neque sit amet
        iaculis. Mauris luctus nunc eu libero aliquam, non pharetra risus
        euismod. Duis dapibus at dolor ut finibus. Sed sed tempor ante. Ut
        luctus, mauris ac tempor interdum, tellus erat congue risus, ut iaculis
        enim lorem a massa. Etiam bibendum erat quis efficitur porta. Praesent
        sed aliquet ex, sit amet laoreet ante. Morbi vitae suscipit libero.
        Integer luctus est ut est fringilla interdum. In tincidunt tempus
        tempus. Sed condimentum enim sed finibus sodales. Nullam id ex tempor,
        fermentum metus id, sagittis mauris. Nulla luctus nisi purus. Cras nec
        scelerisque eros. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nam nec pellentesque orci.
      </Description>
      <Age></Age>
    </Container>
  );
};

export default Post;
