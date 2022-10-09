import {React, useState} from 'react';
import { 
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";

import { Home, Annons, Profile } from "../screens/Index";

import {COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

export default function Tabs() {

 
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Annonser"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Ny annons"
          component={Annons}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.add}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Min profil"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={icons.user}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLORS.primary : COLORS.secondary,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );

    const styles = StyleSheet.create({
      
    });
    
}



