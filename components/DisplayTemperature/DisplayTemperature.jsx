import { Text } from 'react-native';
import { style } from './DisplayTemperature.style';

export function DisplayTemperature({ temperature, unit }) {
  return (
    <Text style={style.temperature}>{temperature} {unit}</Text>
  );
}
