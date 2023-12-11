import { View, ImageBackground } from 'react-native';
import { style } from './App.style';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import hotBackground from './assets/hot.png';
import coldBackground from './assets/cold.png';
import { Input } from './components/Input/Input';
import { useEffect, useState } from 'react';
import { DisplayTemperature } from './components/DisplayTemperature/DisplayTemperature';
import { convertTemperatureTo, getOppositeUnit, isIceTemperature, UNITS } from './utils/temperature';
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [unit, setUnit] = useState(UNITS.celcius);
  const [background, setBackground] = useState(coldBackground);

  const opositeUnit = getOppositeUnit(unit);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, unit);
    setBackground(isCold ? coldBackground : hotBackground);

  }, [unit, inputValue]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, opositeUnit);
    }
  }

  return (
    <ImageBackground style={style.backgroundImage} source={background}>

      <SafeAreaProvider>
        <SafeAreaView style={style.root}>
          <View style={style.workspace}>
            <DisplayTemperature
              unit={opositeUnit}
              temperature={getConvertedTemperature()} />
            <Input
              unit={unit}
              defaultValue={0}
              onChange={setInputValue} />
            <ButtonConvert
              onPress={() => {
                setUnit(opositeUnit);
              }}
              unit={unit} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
