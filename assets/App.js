// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import CreateGoal from './CreateGoal';
import GoalDetails from './GoalDetails';
import AchievedGoals from './AchievedGoals';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CreateGoal" component={CreateGoal} />
        <Stack.Screen name="GoalDetails" component={GoalDetails} />
        <Stack.Screen name="AchievedGoals" component={AchievedGoals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
