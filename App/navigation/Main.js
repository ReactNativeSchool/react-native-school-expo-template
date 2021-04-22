import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import { Detail } from '../screens/Detail';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="List" component={List} />
    <MainStack.Screen name="Detail" component={Detail} />
  </MainStack.Navigator>
);
