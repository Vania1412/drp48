// GoalDetails.js
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const GoalDetails = ({ route }) => {
  const { goal } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>{goal.title}</Text>
      <Text>{goal.usersSaving} users saving for this goal</Text>
      <Text>{goal.usersAchieved} users achieved this goal</Text>
      <FlatList
        data={goal.storiesAndTips}
        renderItem={({ item }) => (
          <View>
            <Text>{item.author}</Text>
            <Text>{item.tip}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default GoalDetails;
