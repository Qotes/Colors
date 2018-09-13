import * as React from 'react'
import ReactCircle from './circle'
import { IColorData } from '../colors'


interface IColorProps {
  color: IColorData
}

interface ICircleProps {
  progress: number
  color: string
}

interface ICmykProps extends ICircleProps {
  label: 'C' | 'M' | 'Y' | 'K'
}

interface IRgbProps {
  label: 'R' | 'G' | 'B'
  value: number
}


// tslint:disable: jsx-alignment no-magic-numbers
const Circle = ({ progress, color }: ICircleProps) => (
  <ReactCircle progress={progress} progressColor={color} textColor={color}
    showPercentageSymbol={false} size={50} lineWidth={15} bgColor="rgba(220, 220, 220, 0.6)"
    textStyle={{ fontSize: '12rem' }} animationDuration="2s"
  />
)


const Cmyk = ({ label, progress, color }: ICmykProps) => (
  <div className="color-box">
    <div className="color-label font-sans">{label}</div>
    <div className="color-circle"><Circle progress={progress} color={color} /></div>
  </div>
)


const Rgb = ({ label, value }: IRgbProps) => (
  <div className="color-box">
    <div className="color-label font-sans">{label}</div>
  </div>
)


const ColorPanel = ({ color }: IColorProps) => (
  <ul className="none-style">
    <li className="spliter" />
    <li><Cmyk label="C" progress={Math.random() * 100 >> 0} color="cyan" /></li>
    <li className="spliter" />
    <li><Cmyk label="M" progress={Math.random() * 100 >> 0} color="magenta" /></li>
    <li className="spliter" />
    <li><Cmyk label="Y" progress={Math.random() * 100 >> 0} color="yellow" /></li>
    <li className="spliter" />
    <li><Cmyk label="K" progress={Math.random() * 100 >> 0} color="black" /></li>
    <li className="spliter" />
    <li><Rgb label="R" value={1} /></li>
    <li className="spliter" />
    <li><Rgb label="G" value={1} /></li>
    <li className="spliter" />
    <li><Rgb label="B" value={1} /></li>
    <li className="spliter" />
  </ul>
)


const ColorName = ({ color }: IColorProps) => (
  <div className="row justify-content-around">
    <div className="col" />
    <div className="col col-sm-auto">
      <div className="col color-name">
        <span className="color-name-kanji rem-4 font-kai">{color.kanji}</span>
        <br/>
        <span className="color-name-roma font-eb-garamond">{color.name}</span>
      </div>
    </div>
    <div className="col" />
  </div>
)


export default function Color ({ color }: IColorProps) {
  return (
    <div className="row justify-content-around color">
      <div className="col col-sm-auto color-panel">
        <ColorPanel color={color} />
      </div>

      <div className="col">
        <ColorName color={color} />
      </div>

      <div className="col col-sm-auto navigator">
        <span className="text-verticle rem-2 font-bebas-neue">NIPPON COLORS</span>
      </div>
    </div>
  )
}
