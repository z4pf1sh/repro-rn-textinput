import {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputSelectionChangeEventData,
} from 'react-native';
const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selection, setSelection] = useState({start: -1, end: -1});
  const onChange = (evt: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const {text} = evt.nativeEvent;
    setInputValue(text);
  };
  const onSelectionChange = (
    evt: NativeSyntheticEvent<TextInputSelectionChangeEventData>,
  ) => {
    const {selection} = evt.nativeEvent;
    const {start, end} = selection;
    console.log('selection change: ', start, end);
    setSelection(selection);
  };
  return (
    <View style={styles.container}>
      <Text>value: {inputValue}</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        placeholder="test"
        selection={selection}
        onChange={onChange}
        onSelectionChange={onSelectionChange}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 300,
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 80,
    padding: 20,
  },
  input: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default App;
