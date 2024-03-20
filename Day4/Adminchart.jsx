import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import './Adminchart.css'
import Adminside from './Adminside';
const Adminchart = () => {
  // Sample data representing bookings of each venue over time
  const data = [
    { name: 'Venue A', value: 100 },
    { name: 'Venue B', value: 150 },
    { name: 'Venue C', value: 80 },
    { name: 'Venue D', value: 200 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

  return (
    <div>
    <Adminside/>
    <div className='chart-container'>
    <div className='graph-container'>
      <div style={{ width: '80%', margin: 'auto' }}>
        <h2>Bookings of Each Venue Over Time</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Adminchart;
