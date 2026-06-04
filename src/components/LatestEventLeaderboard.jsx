import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  
  
  const LatestEventLeaderboard = ({ leaderboard, eventTitle }) => {
    if (!leaderboard) return <p>Loading...</p>
    
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: eventTitle,
        },
      },
      scales: { 
        y: {
          reverse: true
        }
      }
    };
    
    const top10 = leaderboard.leaderboardRows.slice(0, 10)
    const labels = top10.map(p => [p.firstName + ' ' + p.lastName, p.position])

    const data = {
      labels,
      datasets: [
        {
          label: 'Score under par',
          data: top10.map(p => p.total),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };

    return(
        <div id="leaderboard" className='w-5/6 mx-auto p-10'>
            <Bar options={options} data={data} />
        </div>
    );
  };

export default LatestEventLeaderboard
  