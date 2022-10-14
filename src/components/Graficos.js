import './Grafico.css';
import React from "react";
import { useState,useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer 
} from "recharts";
const Graficos =() => { 
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch("http://localhost/pj2/api/produto/select-all")
    .then((response) => response.json())
    .then((data) => setProduto  (data))
    }, [])
    return (
      <>
     
        {produto &&
        produto.map((produto) => {
          const data = [
            {
              name: 'ainda',
              uv: 4000,
              pv:400,
              
            },
            {
              name: "Page B",
              uv: 3000,
              pv: 1398,
              amt: 2210
            },
          ];
        <>
           <ResponsiveContainer width="100%" aspect={3}>
    <BarChart 
      width={200}
      height={300}
      data={data}
      margin={{
        top: 50,
        right: 80,
        left: 80,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" style={{stroke:"white"}} />
      <YAxis tick={{stroke:"white"}} />
      <Tooltip  />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
</ResponsiveContainer>
        </>
          })
        }
    </>
      )
    }
export default Graficos;
