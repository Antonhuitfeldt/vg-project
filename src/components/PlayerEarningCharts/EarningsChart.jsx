import { useState } from 'react'
import { animate } from 'animejs';
import PlayerEarningsLineChart from "./PlayerEarningsLineChart";
import PlayerEarningsPieChart from "./PlayerEarningsPieChart";

const EarningsChart = ({ earnings, eventTitle }) => {
    const [showChart, setShowChart] = useState(false);

    const animateSwitch = (value) => {
        animate('.earnings-chart', { opacity: [0, 1], duration: 600 })
        setShowChart(value)
    }
  
    if (showChart) {
      return <div className='earnings-chart'><PlayerEarningsLineChart earnings={earnings} eventTitle={eventTitle} onSwitch={() => animateSwitch(false)} /></div>
    }
    
    return <div className='earnings-chart'><PlayerEarningsPieChart earnings={earnings} eventTitle={eventTitle} onSwitch={() => animateSwitch(true)} /></div>
  }
  
  export default EarningsChart

