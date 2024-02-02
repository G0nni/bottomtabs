import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
