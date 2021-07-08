import React from 'react'
import { render } from 'react-dom'

import * as styles from './styles/styles.scss'

const App = () => {  
  return (
    <div className={ styles.container }>
      <h1>Hello1</h1>
      <hr />
      <div className={ styles.box }>
        <h2>Sass</h2>
      </div>
    </div>
  )
}
render(<App />, document.getElementById('root'))
