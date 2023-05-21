import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { data } from 'autoprefixer'

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
            label:'Poll',
            data:props.data,
            backgroundColor:['black','red','green','violet','blue','magenta'],
            bordercolor:['black','red','green','violet','blue','magenta'],
        }]
    }

    const options={

    }
  return (
    <div className='w-1/3 h-1/3 '>
        <Doughnut
        
        data={data}
        options={options}
        />
      
    </div>
  )
}
