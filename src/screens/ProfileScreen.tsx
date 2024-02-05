import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  Profile: {name: string};
};

type ProfileRouteProp = RouteProp<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC = () => {
  const route = useRoute<ProfileRouteProp>();
  return (
    <View>
      <Text>Profile</Text>
      <Text>{route?.params?.name}</Text>
    </View>
  );
};

export default ProfileScreen;
