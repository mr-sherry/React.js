import { useState } from 'react';

const units = {
  meter: 1,
  kilometer: 1000,
  foot: 0.3048,
  inch: 0.0254,
};

export function useUnitConverter() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');

  const convert = () => {
    const meters = value * units[fromUnit];
    const converted = meters / units[toUnit];
    return converted;
  };

  return {
    value,
    setValue,
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    result: convert(),
  };
}
