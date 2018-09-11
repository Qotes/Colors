import * as React from 'react'
import { colors, IColorData } from '../colors'
import { rgb2yiq } from './helpers/transformer'
import Context from '../context'


interface IColorProps {
  index: number
  color: IColorData
}


// tslint:disable:jsx-no-lambda
const Color = ({ color, index }: IColorProps) => (
  <Context.Consumer>
    {({ selectColor }) => (
      <li style={{color: color.hex}} onClick={(e: React.MouseEvent) => selectColor(index, e)}>
        {color.kanji} {color.name} {color.hex} {color.cmyk} {rgb2yiq(color.rgb)}
      </li>
    )}
  </Context.Consumer>
)


const Colors = () => (
  <ul>
    {colors.map((color, i) => (<Color color={color} index={i} key={i} />))}
  </ul>
)


export default Colors
