import * as React from 'react'
import { IColorData } from '../colors'
import { rgb2yiq } from './helpers/transformer'


interface IColorProps {
  color: IColorData
}


export default function Color ({ color }: IColorProps) {
  return (
    <li style={{color: color.hex}}>{color.kanji} {color.name} {color.hex} {color.cmyk} {rgb2yiq(color.rgb)}</li>
  )
}
