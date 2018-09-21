import * as React from 'react'
import ReactCircle from './circle'
import { IColorData } from '../colors'
import { Github } from './icons'
import { str2cmyk } from './helpers/transformer'


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
  <ReactCircle progress={progress} progressColor={color} textColor={color} size={50} lineWidth={15} />
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
    <div className="color-value text-right">{value}</div>
  </div>
)


const ColorPanel = ({ color }: IColorProps) => {
  const cmyk = str2cmyk(color.cmyk)
  return (
  <ul className="none-style xs-no-margin">
    <li className="spliter" />
    <li><Cmyk label="C" progress={cmyk[0]} color="cyan" /></li>
    <li className="spliter" />
    <li><Cmyk label="M" progress={cmyk[1]} color="magenta" /></li>
    <li className="spliter" />
    <li><Cmyk label="Y" progress={cmyk[2]} color="yellow" /></li>
    <li className="spliter" />
    <li><Cmyk label="K" progress={cmyk[3]} color="black" /></li>
    <li className="spliter" />
    <li><Rgb label="R" value={color.rgb[0]} /></li>
    <li className="spliter" />
    <li pop-content={color.hex} className="pop"><Rgb label="G" value={color.rgb[1]} /></li>
    <li className="spliter" />
    <li><Rgb label="B" value={color.rgb[2]} /></li>
    <li className="spliter" />
  </ul>
)}


const ColorName = ({ color }: IColorProps) => (
  <div className="row justify-content-around">
    <div className="col xs-no-padding" />
    <div className="col col-auto">
      <div className="col color-name">
        <div className="color-name-kanji rem-4 font-kai fade-in" key={color.hex + 'kanji'}>{color.kanji}</div>
        <div className="color-name-roma font-eb-garamond fade-in" key={color.hex + 'name'}>{color.name}</div>
      </div>
    </div>
    <div className="col" />
  </div>
)


const Navigator = () => (
  <div>
    <div className="red-circle" />
    <div className="text-verticle rem-2 font-bebas-neue">NIPPON COLORS</div>
    <div className="github"><a href="https://github.com/qotes/Colors" target="_blank" rel="noopener"><Github /></a></div>
  </div>
)


export default function Color ({ color }: IColorProps) {
  return (
    <div className="row justify-content-around color">
      <div className="col col-auto color-panel">
        <ColorPanel color={color} />
      </div>

      <div className="col">
        <ColorName color={color} />
      </div>

      <div className="col col-auto navigator xs-hidden">
        <Navigator />
      </div>
    </div>
  )
}
