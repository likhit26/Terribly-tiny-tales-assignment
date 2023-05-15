import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { saveAs } from 'file-saver';

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://www.terriblytinytales.com/test.txt');
      const wordCounts = _.countBy(response.data.split(' '));
      const sortedData = Object.entries(wordCounts)
        .map(([word, count]) => ({ word, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 20);
      setData(sortedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleExport = () => {
    const csvData = data.map((item) => `${item.word},${item.count}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'histogram.csv');
  };

  return (
    <div>
      <button onClick={fetchData}>Submit</button>
      {data.length > 0 && (
        <div>
          <BarChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
          <button onClick={handleExport}>Export</button>
        </div>
      )}
    </div>
  );
};

export default App;

