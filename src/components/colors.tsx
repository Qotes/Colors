import * as React from 'react'
import { colors, IColorData } from '../colors'
import Context from '../context'


interface IColorProps {
  index: number
  color: IColorData
}

interface IColorLineProps {
  value: number
}


const ColorLine = ({value}: IColorLineProps) => (
  <div className="color-line-wrapper">
    <div className="color-line" style={{width: `${value / 256 * 100}%`}} />
  </div>
)


// tslint:disable:jsx-no-lambda
const Color = ({ color, index }: IColorProps) => (
  <Context.Consumer>
    {({ selectColor }) => (
      <li className="color" onClick={(e: React.MouseEvent) => selectColor(index, e)}>
        <div className="row">
          <div className="col-auto square" style={{backgroundColor: color.hex}} />

          <div className="col description hidden d-md-block">
            <div className="color-names">
              <span className="color-kanji font-kai not-hovered">{color.kanji}</span>
              <span className="color-kanji font-kai hovered" style={{color: color.hex}}>{color.kanji}</span>
              <span className="color-hex font-open-sans-light right">{color.hex}</span>
            </div>
            <div className="color-lines">
              <ColorLine value={color.rgb[0]} />
              <ColorLine value={color.rgb[1]} />
              <ColorLine value={color.rgb[2]} />
            </div>
            <div className="color-values">
              <span className="color-name font-eb-garamond">{color.name}</span>
            </div>
          </div>
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
