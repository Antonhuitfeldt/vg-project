import { useState } from 'react'
import Hero from './components/Hero'
import LatestEventLeaderBoard from './components/LatestEventLeaderboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero />
      <LatestEventLeaderBoard />
    </div>
  )
}

export default App
