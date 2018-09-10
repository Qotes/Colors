import * as React from 'react'
import Colors from './colors'
import { colors } from '../colors'


export default function Main () {
  return (
    <main>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col order-12 col-md-auto">
            The third second section
          </div>
          <div className="col order-1">
            <Colors colors={colors} />
          </div>
        </div>
      </div>
    </main>
  )
}
