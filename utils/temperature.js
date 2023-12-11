const UNITS = {
  celcius: '°C',
  farahneit: '°F'
};

function convertTemperatureTo(temperature, unit) {
  if (unit === UNITS.celcius) {
    return ((temperature - 32) / 1.8).toFixed(1);
  } else if (unit === UNITS.farahneit) {
    return (temperature * 1.8 + 32).toFixed(1);
  } else {
    return new Error('Invalid unit');
  }
}

function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.farahneit : UNITS.celcius;
}


function isIceTemperature(temperature, unit) {
  if (unit === UNITS.celcius) {
    return temperature <= 0;
  } else if (unit === UNITS.farahneit) {
    return temperature <= 32;
  } else {
    return new Error('Invalid unit');
  }
}

export { UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature };
