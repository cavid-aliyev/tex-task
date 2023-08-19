import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../constants';
import {Posts, PostDetail} from '../pages';

const Stack = createNativeStackNavigator();

const RootScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.Posts} component={Posts} />
      <Stack.Screen name={routes.PostDetail} component={PostDetail} />
    </Stack.Navigator>
  );
};

function Routes() {
  return <RootScreen />;
}

export default Routes;
