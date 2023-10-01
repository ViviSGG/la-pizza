import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Main from './componentes/Main'
import Footer from './componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
