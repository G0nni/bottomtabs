import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Profile: {name: string};
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </View>
  );
};

export default HomeScreen;
