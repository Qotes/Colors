import * as React from 'react'
import Context from '../context'


export default function Footer () {
  return (
    <Context.Consumer>
      {({ contrastColor }) => (
        <footer className="text-right">
          <div className={contrastColor}>
            <span>Copyright © 2018 Sy. </span>
            <div className="block" />
            <span>Exported from: </span><cite><a href="http://nipponcolors.com">NIPPON COLORS - 日本の伝統色</a>.</cite>
          </div>
        </footer>
      )}
    </Context.Consumer>
  )
}
