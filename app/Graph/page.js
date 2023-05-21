'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup';
import PieChart from '../PieChart';


export default function page() {
const [gardening,setGardening]=useState([])
const [eat, setEat]=useState([])
const [health, setHealth]=useState([])
const [grocerie,setGrocerie]=useState([])
const [utility, setUtility]=useState([])
const [commute, setCommute]=useState([])
const [data, setData]=useState([])

    const formik=useFormik({
        initialValues: {
          min:'',
          max:''
        },
        validationSchema:yup.object({
          min:yup.date().required(),
          max:yup.date().required()

        }),
        onSubmit:(values,{resetForm})=>{
         
            axios.post('http://localhost:3000/expense/expensegraph',values)
            .then(response=>{
               
               ok(response.data)

               
                console.log(response.data);
            })
            .catch(err=>{
                console.log(err);
            })



          
           
            resetForm(values)
        }


        
    })


    function sum(x){
        var sum = 0;
        x.forEach(i=>{
        sum =sum + i;
        })
        return sum;
    }

    function ok(data){
        var aeat=[]
        var ahealth=[]
        var agardening=[]
        var autiliy=[]
        var acommute=[]
        var agrocerie=[]
        var adata=[]

        data.forEach(element => {
            if(element.category=='health'){
                ahealth.push(element.ammount)
            }
          else if (element.category=='eat'){

            aeat.push(element.ammount)
          }
          else if (element.category=='gardening'){

            agardening.push(element.ammount)

          }
          else if (element.category=='grocerie'){

            agrocerie.push(element.ammount)

          }
          else if (element.category=='utility'){

            autiliy.push(element.ammount)

          }
          else if (element.category=='commute'){

            acommute.push(element.ammount)

          }
        });



        setEat(sum(aeat))
        setGardening(sum(agardening))
        setHealth(sum(ahealth))

        adata.push(sum(agardening))
        adata.push(sum(ahealth))
        adata.push(sum(aeat))
        adata.push(sum(agrocerie))
        adata.push(sum(autiliy))
        adata.push(sum(acommute))

        setData(adata)
    }


    console.log(data);
 
  return (
    <div>
           
<div className='w-full pl-96 pr-96 mt-20'>



<form  onSubmit={formik.handleSubmit}>


<div className="grid md:grid-cols-3 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="date" name="min" id="mindate" onChange={formik.handleChange}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="mindate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">From</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="date" name="max" id="maxdate" onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="maxdate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">To</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <button type='submit' >Go</button>
    </div>
    
</div>
</form>
</div>



<PieChart  data={data} />

    </div>
  )
}
