import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartOptions } from 'chart.js';

const MoodChart: React.FC = () => {
  const [selectedView, setSelectedView] = useState('Week');

  const dataSets: { [key: string]: number[] } = {
    Day: [3, 4, 2, 5, 3, 4, 4, 3, 5, 4],
    Week: [2, 4, 5, 3, 2, 4, 5],
    Month: [3, 2, 4, 3, 5, 4, 3, 2, 4, 5, 3, 4],
    Year: [3, 4, 4, 5, 3, 2, 4, 3, 5, 4, 4, 3],
  };

  const labels: { [key: string]: string[] } = {
    Day: ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
    Week: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    Month: [
      'Week 1', 'Week 2', 'Week 3', 'Week 4',
      'Week 5', 'Week 6', 'Week 7', 'Week 8',
      'Week 9', 'Week 10', 'Week 11', 'Week 12',
    ],
    Year: [
      'Jan', 'Feb', 'Mar', 'Apr',
      'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec',
    ],
  };

  const chartData = {
    labels: labels[selectedView],
    datasets: [
      {
        label: 'Mood Level',
        data: dataSets[selectedView],
        fill: true,
        borderColor: '#7C3AED',
        backgroundColor: 'rgba(124, 58, 237, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#7C3AED',
        pointBorderColor: '#7C3AED',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 800,
      easing: 'easeOutQuart',
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, color: '#333' },
      },
      x: {
        ticks: { color: '#333' },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#7C3AED',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
    },
  };

  const views = ['Day', 'Week', 'Month', 'Year'];

  return (
    <div className="bg-white rounded-xl p-4 shadow-md">
      {/* Heading and Toggle Buttons */}
      <div className="flex mb-4 justify-between items-center flex-wrap">
        <h2 className="text-lg font-semibold">Mood Chart</h2>
        <div className="flex">
          {views.map((view) => (
            <button
              key={view}
              className={`px-3 py-1 mx-1 rounded-full text-sm transition duration-300 ${
                selectedView === view ? 'bg-[#7C3AED] text-white shadow-md' : 'bg-gray-100 text-black'
              }`}
              onClick={() => setSelectedView(view)}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Mood Chart */}
      <div className="h-48">
        <Line key={selectedView} data={chartData} options={options} />
      </div>
    </div>
  );
};

export default MoodChart;
