import * as React from 'react'
import Colors from './colors'
import Context from '../context'


export default function Main () {
  return (
    <Context.Consumer>
      {({ selectedColor }) => (
        <main style={{backgroundColor: selectedColor.hex}}>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col order-1">
                <Colors />
              </div>
              <div className="col order-12 col-sm-auto">
                The third second section
              </div>
            </div>
          </div>
        </main>
      )}
    </Context.Consumer>
  )
}
