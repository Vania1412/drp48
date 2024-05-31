// AchievedGoals.js
import React from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';

const AchievedGoals = () => {
  const [achievedGoals, setAchievedGoals] = React.useState([]);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={achievedGoals}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>Expected spending: £{item.expectedSpending}</Text>
            <Text>Actual spending: £{item.actualSpending}</Text>
            <Text>Saved for {item.daysSaved} days</Text>
            <TextInput
              placeholder="Add Memorable Moments"
              onChangeText={(text) => item.memorableMoments = text}
            />
            <Button title="Share Stories and Tips" onPress={() => { /* Logic to share stories and tips */ }} />
          </View>
        )}
      />
    </View>
  );
};

export default AchievedGoals;
