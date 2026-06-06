import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

  
ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

const PlayerEarningsLineChart = ({ earnings, eventTitle, onSwitch }) => {
    if (!earnings) return <p>Loading...</p>

    const top10 = earnings.leaderboard.slice(0, 10);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Top 10 Earnings',
            },
        },
    };
      
    const labels = top10.map(p => p.lastName);
      
    const data = {
        labels,
        datasets: [
          {
            label: 'Ammount',
            data: top10.map(p => p.earnings),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
    
    return (
      <div className="flex items-center gap-x-10 max-w-5xl mx-auto px-6 py-16">
        <div className="w-1/3 flex flex-col gap-y-2">
          <h2 className="text-5xl font-semibold text-gray-900">{eventTitle}</h2>
          <p className="text-gray-500 text-xl">Player Earnings</p>
          <button
            className="rounded-md bg-indigo-600 w-fit px-3.5 py-2.5 my-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={onSwitch}
          >
          View as Pie Chart
          </button>
        </div>

        <div className="w-2/3">
          <Line options={options} data={data} />
        </div>
      </div>
    );
};

export default PlayerEarningsLineChart;