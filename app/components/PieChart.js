import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart(props) {
    console.log(props);

    const data={
        labels:['Gardening','Health Care','Food','Grocery','Utilities','Commutes'],
        datasets:[{
            label:'Tk',
            data:props.data,
            backgroundColor:['black','red','green','violet','blue','cyan'],
            bordercolor:['black','red','green','violet','blue','cyan'],
        }]
    }

    const options={

    }
  return (
    <div className='w-full pl-96 pr-96 mt-10'>
        <Doughnut
        
        data={data}
        options={options}
        />
      
    </div>
  )
}
