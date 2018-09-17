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
      <li className="color" style={{color: color.hex}} onClick={(e: React.MouseEvent) => selectColor(index, e)}>
        <div className="row">
          <div className="col-auto square" style={{backgroundColor: color.hex}} />
          <div className="col description">{color.kanji} {color.name} {color.hex} {color.cmyk} {rgb2yiq(color.rgb)}</div>
        </div>
      </li>
    )}
  </Context.Consumer>
)


const Colors = () => (
  <ul className="none-style">
    {colors.map((color, i) => (<Color color={color} index={i} key={i} />))}
  </ul>
)


export default Colors
