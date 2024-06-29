import styles from '@/module/editorModule/components/colorPicker/ColorPicker.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useMemo, useRef, useState } from 'react';
import { transformColor } from '@/module/editorModule/utils/colorUtils';
import TextInput from '@/module/editorModule/components/textInput/TextInput';
import MoveWrapper from './MoveWrapper';

const cn = classNames.bind(styles);

interface ColorPickerProps {
  color: string;
  onChange?: (value: string, skipHistoryStack: boolean) => void;
}

export interface Position {
  x: number;
  y: number;
}

const basicColors = [
  '#d0021b',
  '#f5a623',
  '#f8e71c',
  '#8b572a',
  '#7ed321',
  '#417505',
  '#bd10e0',
  '#9013fe',
  '#4a90e2',
  '#50e3c2',
  '#b8e986',
  '#000000',
  '#4a4a4a',
  '#9b9b9b',
  '#ffffff',
];

const WIDTH = 214;
const HEIGHT = 150;

export default function ColorPicker({
  color,
  onChange,
}: Readonly<ColorPickerProps>): JSX.Element {
  const [skipAddingToHistoryStack, setSkipAddingToHistoryStack] =
    useState<boolean>(false);
  const [selfColor, setSelfColor] = useState(transformColor('hex', color));
  const [inputColor, setInputColor] = useState<string>(color);
  const innerDivRef = useRef<HTMLDivElement | null>(null);

  const saturationPosition = useMemo(
    () => ({
      x: (selfColor.hsv.s / 100) * WIDTH,
      y: ((100 - selfColor.hsv.v) / 100) * HEIGHT,
    }),
    [selfColor.hsv.s, selfColor.hsv.v],
  );

  const huePosition = useMemo(
    () => ({
      x: (selfColor.hsv.h / 360) * WIDTH,
    }),
    [selfColor.hsv],
  );

  const onSetHex = (hex: string) => {
    setInputColor(hex);
    if (/^#[0-9A-Fa-f]{6}$/i.test(hex)) {
      const newColor = transformColor('hex', hex);
      setSelfColor(newColor);
    }
  };

  const onMoveSaturation = ({ x, y }: Position) => {
    const newHsv = {
      ...selfColor.hsv,
      s: (x / WIDTH) * 100,
      v: 100 - (y / HEIGHT) * 100,
    };
    const newColor = transformColor('hsv', newHsv);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  };

  const onMoveHue = ({ x }: Position) => {
    const newHsv = { ...selfColor.hsv, h: (x / WIDTH) * 360 };
    const newColor = transformColor('hsv', newHsv);

    setSelfColor(newColor);
    setInputColor(newColor.hex);
  };

  useEffect(() => {
    // Check if the dropdown is actually active
    if (innerDivRef.current !== null && onChange) {
      onChange(selfColor.hex, skipAddingToHistoryStack);
      setInputColor(selfColor.hex);
    }
  }, [selfColor, onChange]);

  useEffect(() => {
    if (color === undefined) {
      return;
    }
    const newColor = transformColor('hex', color);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  }, [color]);

  return (
    <div
      className={cn('color-picker-wrapper')}
      style={{ width: WIDTH }}
      ref={innerDivRef}
    >
      <TextInput label="Hex" onChange={onSetHex} value={inputColor} />
      <div className={cn('color-picker-basic-color')}>
        {basicColors.map((basicColor) => (
          <button
            className={basicColor === selfColor.hex ? ' active' : 'inactive'}
            key={basicColor}
            style={{ backgroundColor: basicColor }}
            onClick={() => {
              setInputColor(basicColor);
              setSelfColor(transformColor('hex', basicColor));
            }}
          />
        ))}
      </div>
      <MoveWrapper
        className="color-picker-saturation"
        style={{ backgroundColor: `hsl(${selfColor.hsv.h}, 100%, 50%)` }}
        setSkipAddingToHistoryStack={setSkipAddingToHistoryStack}
        onChange={onMoveSaturation}
      >
        <div
          className={cn('color-picker-saturation_cursor')}
          style={{
            backgroundColor: selfColor.hex,
            left: saturationPosition.x,
            top: saturationPosition.y,
          }}
        />
      </MoveWrapper>
      <MoveWrapper
        className="color-picker-hue"
        setSkipAddingToHistoryStack={setSkipAddingToHistoryStack}
        onChange={onMoveHue}
      >
        <div
          className={cn('color-picker-hue_cursor')}
          style={{
            backgroundColor: `hsl(${selfColor.hsv.h}, 100%, 50%)`,
            left: huePosition.x,
          }}
        />
      </MoveWrapper>
      <div
        className={cn('color-picker-color')}
        style={{ backgroundColor: selfColor.hex }}
      />
    </div>
  );
}
