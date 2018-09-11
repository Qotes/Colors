import data from './colors.json'


export interface IColorData {
  name: string,
  kanji: string,
  cmyk: string,
  rgb: number[],
  hex: string
}


export const colors: IColorData[] = data.colors


export default colors
