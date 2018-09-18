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
              <div className="col-3 col-md">
                <Colors />
              </div>
              <div className="col-9 col-md">
                <Color color={selectedColor} />
              </div>
            </div>
          </div>
        </main>
      )}
    </Context.Consumer>
  )
}
