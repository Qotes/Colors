import * as React from 'react'
import { colors, IColorData } from './colors'
import { rgb2yiq } from './components/helpers/transformer'


export const defaultColorIndex = 15


export interface IContext {
  selectedColor: IColorData,
  contrastColor: string,
  selectColor: (...args: any[]) => void
}


const Context = React.createContext<IContext>({
  selectedColor: colors[defaultColorIndex],
  contrastColor: rgb2yiq(colors[defaultColorIndex].rgb),
  selectColor: () => {}
})


export default Context
