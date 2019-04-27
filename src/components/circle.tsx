/**
 * @file react-circle from https://github.com/zzarcon/react-circle
 * @author Hector Zarco <hezarco@gmail.com>
 * @author Sy <somarl@live.com>
 * @license MIT License Copyright (c) 2018 Hector Zarco
 */
import * as React from 'react'


export interface CircleProps {
  progress: number
  animate?: boolean
  animationDuration?: string
  showPercentage?: boolean
  progressColor?: string
  bgColor?: string
  textColor?: string
  size?: number
  lineWidth?: number
  verticleSpacing?: string
  roundedStroke?: boolean
  responsive?: boolean
  textClass?: string
}

export interface CircleState {}


export default class Circle extends React.Component<CircleProps, CircleState> {
  public static VIEWPORT = 200

  public static defaultProps: CircleProps = {
    progress: 0,
    animate: true,
    animationDuration: '2s',
    showPercentage: true,
    progressColor: 'rgb(76, 154, 255)',
    bgColor: 'rgba(200, 200, 200, 0.6)',
    textColor: '#6b778c',
    size: 100,
    lineWidth: 25,
    verticleSpacing: '0.35em',
    textClass: 'react-circle-text'
  }

  get text () {
    const {
      progress, showPercentage, textColor, textClass,  lineWidth, verticleSpacing
    } = this.props
    const radius = Circle.VIEWPORT - lineWidth!
    if (!showPercentage) return ''

    return (
      <text className={textClass} fill={textColor} x={radius} y={radius} dy={verticleSpacing} textAnchor="middle">
        {progress}
      </text>
    )
  }

  public render () {
    const {
      progress, size, lineWidth, roundedStroke, responsive,
      bgColor, progressColor,
      animate, animationDuration
    } = this.props
    const radius = Circle.VIEWPORT - lineWidth!
    const perimeter = Math.round(Math.PI * radius * 2)
    const strokeDashoffset = Math.round((100 - progress) / 100 * perimeter)
    const text = this.text
    const transition = animate ? `stroke-dashoffset ${animationDuration} ease-out` : undefined
    const strokeLinecap = roundedStroke ? 'round' : 'butt'
    const svgSize = responsive ? '100%' : size

    const offSet = lineWidth!
    const viewBox = [-offSet, -offSet, (offSet + radius) * 2, (offSet + radius) * 2].join(' ')
    const transform = `rotate(-90 ${radius} ${radius})`

    return (
      <svg width={svgSize} height={svgSize} viewBox={viewBox}>
        <circle stroke={bgColor} cx={radius} cy={radius} r={radius} strokeWidth={lineWidth} fill="none"/>
        <circle stroke={progressColor} transform={transform} cx={radius} cy={radius} r={radius} strokeDasharray={perimeter} strokeWidth={lineWidth} strokeDashoffset={perimeter} strokeLinecap={strokeLinecap} fill="none" style={{ strokeDashoffset, transition }} />
        {text}
      </svg>
    )
  }
}
