import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import LatestEventLeaderboard from './components/LatestEventLeaderboard'
import { TournamentInfo } from './components/TournamentInfo'
import { getSchedule, getLeaderboard } from './api/slashGolfApi'
import './App.css'


const App = () => {
  const [leaderboard, setLeaderboard] = useState(null)
  const [eventTitle, setEventTitle] = useState('')
  const [latestEvent, setLatestEvent] = useState(null)

  useEffect(() => {
    const getLatestEvent = async () => {
      const data = await getSchedule()
      const today = new Date()
      const pastEvents = []

      for (let i = 0; i < data.schedule.length; i++) {
        const eventEndDate = new Date(data.schedule[i].date.end)
        if (eventEndDate < today) {
          pastEvents.push(data.schedule[i])
        }
      }


      const latestEvent = pastEvents[pastEvents.length - 1]
      setLatestEvent(latestEvent)
      
      const leaderboardData = await getLeaderboard(latestEvent.tournId)
      setLeaderboard(leaderboardData)

      const eventTitle = latestEvent.name
      setEventTitle(eventTitle)
    }

    getLatestEvent()
  }, [])



  return (
    <div>
      <Hero />
      <LatestEventLeaderboard 
        leaderboard={leaderboard}
        eventTitle={eventTitle}
      />
      <TournamentInfo latestEvent={latestEvent} />
    </div>
  )
}

export default App
