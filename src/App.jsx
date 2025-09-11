import { useState } from 'react'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Gallery App</h1>
      <hr />

      <Container />
    </>
  )
}

export default App
