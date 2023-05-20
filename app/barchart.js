'use client'
import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import {Bar} from 'react-chartjs-2'
import { data } from 'autoprefixer'
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend

)


export default function Barchart(props) {


    const data={
        labels: props.label,
        
        datasets:[
            {
                label:'Forcast ',
                data:props.data,
                backgroundColor:['red', 'green'],
                bordercolor:'black',
                borderWidth:1,
            }
        ]
    }

    const options={

    }
  return (
    <div className='w-1/2 pl-24 '>
      
      <Bar
      
      data={data}
      options={options}
      
      >

      </Bar>
    </div>
  )
}
