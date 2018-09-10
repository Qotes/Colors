import * as React from 'react'
import Color from './color'
import { IColorData } from '../colors'


interface IColorsProps {
  colors: IColorData[]
}


export default function Colors ({ colors }: IColorsProps) {
  return (
    <ul>
      {colors.map(color => (<Color color={color} />))}
    </ul>
  )
}
