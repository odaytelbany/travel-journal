import React from 'react'
// import components 
import Navbar from './components/Navbar'
import Card from './components/Card'
// css style
import '../src/App.css'
// data import
import data from '../src/data'

//=========================================================

export default function App() {
console.log(data)
  const cards = data.map((items) => {
    return <Card {...items}/>

  })
  
  return (
    <div>
        <Navbar />
        {cards}
    </div>                                                      
  )
}
