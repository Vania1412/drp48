// HomePage.js
import React from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  const [goals, setGoals] = React.useState([]);
  const [newGoal, setNewGoal] = React.useState('');

  const addGoal = () => {
    // Logic to add a new goal
  };

  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Expected saving per month: £32</Text>
        <Text>Current saving: £250</Text>
        <Text>Wendy237</Text>
      </View>
      <Button title="Add Goal" onPress={() => navigation.navigate('CreateGoal')} />
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('GoalDetails', { goal: item })}>
            <Text>{item.title} - {item.progress}%</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomePage;
