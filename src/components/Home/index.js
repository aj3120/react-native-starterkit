import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TestAction } from '../../redux/Actions/TestAction';

export default function HomeScreen() {
  // Dispatch
  const dispatch = useDispatch();

  // Store selectors
  const result = useSelector(store => store.testReducer.test_data);

  // State variables
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Home</Text>
      <Text>Result : {result}</Text>
      <TextInput
        placeholder = "Enter a name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Button onPress={() => dispatch(TestAction(name))} title="Dispatch"></Button>

    </View>
  );
}

