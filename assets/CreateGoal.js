// CreateGoal.js
import React from 'react';
import { View, TextInput, Button } from 'react-native';

const CreateGoal = ({ navigation }) => {
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const saveGoal = () => {
    // Logic to save the new goal
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Goal Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Save" onPress={saveGoal} />
    </View>
  );
};

export default CreateGoal;
