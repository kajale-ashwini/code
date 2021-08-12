import React from 'react';
import Profile from './Profile';
import FeeOverview from './FeeOverview';
import Design from './Design';

import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="FeeOverview" component={FeeOverview} />
      <Tab.Screen name="Design" component={Design} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;