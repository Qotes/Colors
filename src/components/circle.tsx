import * as React from 'react'


export interface CircleProps {
  progress: number
  animate?: boolean
  animationDuration?: string
  showPercentage?: boolean
  showPercentageSymbol?: boolean
  progressColor?: string
  bgColor?: string
  textColor?: string
  size?: number
  lineWidth?: number
  percentSpacing?: number
  textStyle?: React.CSSProperties
  roundedStroke?: boolean
  responsive?: boolean
  onAnimationEnd? (): void
}

export interface CircleState {}


const { PI, round } = Math
const VIEWPORT = 200


export default class Circle extends React.Component<CircleProps, CircleState> {
  public static defaultProps: CircleProps = {
    progress: 0,
    animate: true,
    animationDuration: '1s',
    showPercentage: true,
    showPercentageSymbol: true,
    progressColor: 'rgb(76, 154, 255)',
    bgColor: '#ecedf0',
    textColor: '#6b778c',
    size: 100,
    lineWidth: 25,
    percentSpacing: 10,
    textStyle: { font: 'bold 4rem Helvetica, Arial, sans-serif' }
  }

  get text () {
    const {
      progress, showPercentage, textColor, textStyle, percentSpacing, showPercentageSymbol, lineWidth
    } = this.props
    const radius = VIEWPORT - lineWidth!
    if (!showPercentage) return

    return ( // FIXME: dominantbaseline not supported in IE/Edge
      <text style={textStyle} fill={textColor} x={radius} y={radius} textAnchor="middle" dominantBaseline="central">
        {progress}{showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>}
      </text>
    )
  }

  public render () {
    const {
      progress, size, lineWidth, roundedStroke, responsive,
      bgColor, progressColor,
      animate, animationDuration, onAnimationEnd
    } = this.props
    const radius = VIEWPORT - lineWidth!
    const diameter = round(PI * radius * 2)
    const getOffset = (val = 0) => round((100 - val) / 100 * diameter)
    const text = this.text
    const strokeDashoffset = getOffset(progress) // FIXME: fix the offset when lineWidth is bigger than 25
    const transition = animate ? `stroke-dashoffset ${animationDuration} ease-out` : undefined
    const strokeLinecap = roundedStroke ? 'round' : 'butt'
    const svgSize = responsive ? '100%' : size

    const offSet = lineWidth!
    const viewBox = [-offSet, -offSet, (offSet + radius) * 2, (offSet + radius) * 2].join(' ')
    const transform = `rotate(-90 ${radius} ${radius})`

    return (
      <svg width={svgSize} height={svgSize} viewBox={viewBox}>
        <circle stroke={bgColor} cx={radius} cy={radius} r={radius} strokeWidth={lineWidth} fill="none"/>
        <circle stroke={progressColor} transform={transform} cx={radius} cy={radius} r={radius} strokeDasharray="1100" strokeWidth={lineWidth} strokeDashoffset="1100" strokeLinecap={strokeLinecap} fill="none" style={{ strokeDashoffset, transition }} onTransitionEnd={onAnimationEnd}/>
        {text}
      </svg>
    )
  }
}
