import * as React from 'react'
import ReactCircle from './circle'
import { IColorData } from '../colors'


interface IColorProps {
  color: IColorData
}


interface ICircleProps {
  progress: number,
  color: string,
}


// tslint:disable: jsx-alignment no-magic-numbers
const Circle = ({ progress, color }: ICircleProps) => (
  <ReactCircle progress={progress} progressColor={color} textColor={color}
    showPercentageSymbol={false} size={50} lineWidth={15} bgColor="rgba(200, 200, 200, 0.5)"
    textStyle={{ fontSize: '12rem' }} animationDuration="2s"
  />
)


export default function Color ({ color }: IColorProps) {
  return (
    <div className="color">
      <span className="color-name">{color.kanji}</span>
      <Circle progress={Math.random() * 100 >> 0} color="cyan" />
      <Circle progress={Math.random() * 100 >> 0} color="magenta" />
      <Circle progress={Math.random() * 100 >> 0} color="yellow" />
      <Circle progress={Math.random() * 100 >> 0} color="black" />
    </div>
  )
}
