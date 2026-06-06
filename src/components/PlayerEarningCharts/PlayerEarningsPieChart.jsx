import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PlayerEarningsPieChart = ({ earnings, eventTitle, onSwitch }) => {
    if (!earnings) return <p>Loading...</p>

    const top10 = earnings.leaderboard.slice(0, 10);
    const others = earnings.leaderboard.slice(10);
    const othersTotal = others.reduce((sum, player) => sum + player.earnings, 0);
    const labels = top10.map(p => p.firstName + ' ' + p.lastName);
    labels.push('Rest of the players');
    const earningsData = top10.map(p => p.earnings);
    earningsData.push(othersTotal);

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'top 10 Earnings',
            data: earningsData,
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(100, 100, 100, 0.2)',
            ],
            borderWidth: 1,
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
        View as Line Chart
        </button>
      </div>

      <div className="w-2/3">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default PlayerEarningsPieChart;