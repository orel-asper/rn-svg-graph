//@ts-nocheck
import React from 'react';
import { Path } from 'react-native-svg';
import { DataLineProps, Point } from './types';

const DataLine = <T extends number>({ points, color, strokeWidth }: DataLineProps<T>) => {
  const d = points.reduce((acc, point: Point<T>, i) => {
    if (i === 0) {
      return `M ${point.x} ${point.y}`;
    }
    return `${acc} L ${Math.round(point.x)} ${Math.round(point.y)}`;
  }, '');

  return <Path d={d} stroke={color} strokeWidth={strokeWidth} fill="none" />;
};

export default DataLine;
