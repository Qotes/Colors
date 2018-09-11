import * as React from 'react'
import Context from '../context'


export default function Footer () {
  return (
    <Context.Consumer>
      {({ contrastColor }) => (
        <footer className="absolute">
          <div className={contrastColor}>
            <span>Copyright © 2018 Sy. </span>
            <span>Exported from: </span><cite><a href="http://nipponcolors.com">NIPPON COLORS - 日本の伝統色</a>.</cite><br />
            <span>Color data cited: </span><cite>“日本の伝統色 The Traditional Colors of Japan”. PIE BOOKS, 2007.</cite>
          </div>
        </footer>
      )}
    </Context.Consumer>
  )
}
