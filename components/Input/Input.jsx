import { TextInput, View, Text } from 'react-native';
import { style } from './Input.style';

export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={style.root}>
      <TextInput onChangeText={onChange} defaultValue={defaultValue.toString()} style={style.input} maxLength={5} placeholder='Type your temperature' />
      <Text style={style.unit}>{unit}</Text>
    </View>
  );
}
