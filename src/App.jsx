import React from 'react'
import { Hero } from './components'
import {heroapi} from './data/data.js'
const App = () => {
  return (
    <div>
  
  <Hero heroapi={heroapi}/>

    </div >
  )
}

export default App