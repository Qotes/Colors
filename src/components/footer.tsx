import * as React from 'react'
import Context from '../context'


export default function Footer () {
  return (
    <Context.Consumer>
      {({ contrastColor }) => (
        <footer className="text-right">
          <div className={contrastColor}>
            <span>Copyright © 2018 Sy. </span>
            <div className="block d-sm-none" />
            <span>Exported from: </span><cite><a href="http://nipponcolors.com" target="_blank" rel="noopener">NIPPON COLORS - 日本の伝統色</a>.</cite>
          </div>
        </footer>
      )}
    </Context.Consumer>
  )
}
