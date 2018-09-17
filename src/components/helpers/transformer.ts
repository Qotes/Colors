// tslint:disable
export const rgb2yiq = (rgb: number[]) => ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000 > 128 ? 'initial' : 'white'

export const str2cmyk = (str: string) => [0, 1, 2, 3].map(i => Number(str.slice(i * 3, i * 3 + 3)))
