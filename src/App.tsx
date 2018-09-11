import * as React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'
import { rgb2yiq } from './components/helpers/transformer'
import Context, { IContext, defaultColorIndex } from './context'
import colors from './colors'


class App extends React.Component<{}, IContext> {
  public state = {
    selectedColor: colors[defaultColorIndex],
    contrastColor: rgb2yiq(colors[defaultColorIndex].rgb),
    selectColor: this.selectColor.bind(this)
  }

  public selectColor (index: number = defaultColorIndex) {
    // console.info('clicked', index, colors[index], rgb2yiq(colors[index].rgb))
    this.setState(state => ({
      selectedColor: colors[index],
      contrastColor: rgb2yiq(colors[index].rgb)
    }))
  }

  public render () {
    return (
      <Context.Provider value={this.state}>
        <Header />
        <Main />
        <Footer />
      </Context.Provider>
    )
  }
}


export default App
