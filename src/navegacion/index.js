import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, CreatePost, Notification, Profile, Search} from '../screen';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image, View} from 'react-native';

const Tab = createBottomTabNavigator();
export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route, navigation}) => {
          return {
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              const ICON_SIZE = 27;
              const ICON_IMAGE_SIZE = focused ? 23 : ICON_SIZE;
              switch (route.name) {
                case 'Home':
                  return (
                    <Ionicons
                      name={focused ? 'home' : 'home-outline'}
                      size={ICON_SIZE}
                    />
                  );
                case 'Search':
                  return (
                    <Ionicons
                      name={focused ? 'card-search' : 'card-search-outline'}
                      size={ICON_SIZE}
                    />
                  );
                case 'CreatePost':
                  return (
                    <Ionicons
                      name={focused ? 'plus-box' : 'plus-box-outline'}
                      size={ICON_SIZE}
                    />
                  );
                case 'Notification':
                  return (
                    <Ionicons
                      name={focused ? 'heart' : 'heart-outline'}
                      size={ICON_SIZE}
                    />
                  );
                case 'Profile':
                  return (
                    <View
                    style={{
                          padding: focused ? 2 : 0,
                          borderRadius: ICON_IMAGE_SIZE === 23 ? 27 : 23 / 2,
                          borderWidth: focused ? 1 : 0,
                          borderColor: 'black',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                    >
                      <Image
                        style={{
                          width: ICON_IMAGE_SIZE,
                          height: ICON_IMAGE_SIZE,
                          borderRadius: ICON_IMAGE_SIZE / 2,
                        }}
                        source={{
                          uri: 'https://lamenteesmaravillosa.com/wp-content/uploads/2015/11/personas-que-debemos-evitar.jpg',
                        }}
                      />
                    </View>
                  );
              }
            },
          };
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
