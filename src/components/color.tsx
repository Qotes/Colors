import * as React from 'react'
import { IColorData } from '../colors'


interface IColorProps {
  color: IColorData
}


export default function Color ({ color }: IColorProps) {
  return (
    <div className="color">
      {color.kanji}
    </div>
  )
}
