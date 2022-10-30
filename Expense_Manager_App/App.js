import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpensesScreen from './component/allExpensesScreen';
import ImportantExpensesScreen from './component/importantExpensesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AddExpenseScreen from './component/addExpenseScreen';
import EditExpenseScreen from './component/editExpenseScreen';
import AddExpenseButton from './component/addExpenseButton';
import Icon from "react-native-vector-icons/FontAwesome";
import { BACKGROUND_COLOR, HEADER_AND_TAB_BACKGROUND_COLOR, TAB_BAR_ACTIVE_TINT_COLOR, TAB_BAR_INACTIVE_TINT_COLOR, WHITE_COLOR } from './component/color';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: BACKGROUND_COLOR,
  },
};

function HomeTabs({ navigation: { navigate }}) {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        tabBarActiveTintColor: TAB_BAR_ACTIVE_TINT_COLOR,
        tabBarInactiveTintColor: TAB_BAR_INACTIVE_TINT_COLOR,
        tabBarStyle: { 
          backgroundColor: HEADER_AND_TAB_BACKGROUND_COLOR
        },
        headerStyle: styles.headerStyle,
        headerTintColor: WHITE_COLOR,
        headerTitleAlign: 'center'
      }}>
      <Tab.Screen 
        name="All Expenses" 
        options={{
            headerRight: () => (
              <AddExpenseButton onPress={() => navigate('Add Expense')} />
            ),
            tabBarIcon: ({ color, size }) => 
              <Icon name="dollar" color={color} style={{fontSize: size}}/>
        }}
        component={AllExpensesScreen} />
      <Tab.Screen 
        name="Important Expenses" 
        options={{
            headerRight: () => (
              <AddExpenseButton
                onPress={() => navigate('Add Expense')}
              />
            ),
            tabBarIcon: ({ color, size }) => 
              <Icon name="exclamation" color={color} style={{fontSize: size}}/>
        }}
        component={ImportantExpensesScreen} />
    </Tab.Navigator>
  );
}

function AllScreensStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTintColor: WHITE_COLOR,
        headerTitleAlign: 'center'
      }}>
      <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeTabs} />
      <Stack.Screen name="Add Expense" component={AddExpenseScreen} />
      <Stack.Screen name="Edit Expense" component={EditExpenseScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AllScreensStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: HEADER_AND_TAB_BACKGROUND_COLOR,
  },
  headerTitleStyle: {
    color: WHITE_COLOR,
  }
});
