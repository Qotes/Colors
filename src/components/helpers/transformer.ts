// tslint:disable
export const rgb2yiq = (rgb: number[]) => ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000 > 128 ? 'initial' : 'white'
