'use client';

import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useChart } from '@chakra-ui/charts';
import { useState } from 'react';

const data = [
  { month: 'Jan', sales: 1000 },
  { month: 'Feb', sales: 1200 },
  { month: 'Mar', sales: 1500 },
  { month: 'Apr', sales: 1100 },
  { month: 'May', sales: 1300 },
  { month: 'Jun', sales: 1600 },
  { month: 'Jul', sales: 1400 },
  { month: 'Aug', sales: 1700 },
  { month: 'Sep', sales: 1600 },
  { month: 'Oct', sales: 1900 },
  { month: 'Nov', sales: 2000 },
  { month: 'Dec', sales: 2200 },
];

const LineChartComponent = () => {
  const chart = useChart({
    data,
    series: [{ dataKey: 'sales' }],
  });

  return (
    <LineChart
      width={500}
      height={300}
      data={chart.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
      <XAxis dataKey='month' />
      <YAxis />
      <Tooltip />
      <Line type='monotone' dataKey={chart.key('sales')} stroke='#8884d8' />
    </LineChart>
  );
};

export default function App() {
  return (
    <Container maxW={'container.xl'} py={10}>
      <Card>
        <Card.Header>
          <Heading size='md'>Monthly Sales 2024</Heading>
        </Card.Header>
        <Card.Body>
          <LineChartComponent />
        </Card.Body>
      </Card>
    </Container>
  );
}
