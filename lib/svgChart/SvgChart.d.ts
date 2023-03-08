//@ts-nocheck
import { SVGProps } from 'react-native-svg';
import { LineChartProps } from './types';

declare const SvgChart: (props: LineChartProps & SVGProps<SVGElement>) => JSX.Element;
export default SvgChart;
