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

const samplePlayers = [
    { name: 'Scottie Scheffler', score: 18 },
    { name: 'Rory McIlroy', score: 15 },
    { name: 'Xander Schauffele', score: 12 },
    { name: 'Collin Morikawa', score: 10 },
    { name: 'Viktor Hovland', score: 8 },
    { name: 'Tommy Fleetwood', score: 6 },
    { name: 'Jon Rahm', score: 4 },
    { name: 'Ludvig Åberg', score: 2 },
  ]

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tävlingens namn',
      },
    },
  };
  
  const labels = samplePlayers.map(p => p.name)
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Score under par',
        data: samplePlayers.map(p => p.score),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  
  const LatestEventLeaderBoard = () => {
    return(
        <div id="leaderboard" className='w-5/6 mx-auto p-10'>
            <Bar options={options} data={data} />
        </div>
    );
  };

export default LatestEventLeaderBoard
  