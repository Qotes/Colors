import * as React from 'react'
import Color from './color'
import Colors from './colors'
import Context from '../context'


export default function Main () {
  return (
    <Context.Consumer>
      {({ selectedColor, contrastColor }) => (
        <main style={{backgroundColor: selectedColor.hex}}>
          <div className={`container ${contrastColor}`}>
            <div className="row">
              <div className="col">
                <Colors />
              </div>
              <div className="col">
                <Color color={selectedColor} />
              </div>
            </div>
          </div>
        </main>
      )}
    </Context.Consumer>
  )
}
