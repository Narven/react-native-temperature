import {Text, TouchableOpacity} from 'react-native';
import { style } from './ButtonConvert.style';

export function ButtonConvert({ onPress, unit }) {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Text style={style.text}>Convert to: {unit}</Text>
    </TouchableOpacity>
  );
}
