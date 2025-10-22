import { useState } from 'react'
import './App.css'
import Survey from './components/Survey';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Survey />
    </>
  )
}

export default App
