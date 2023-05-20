'use client'
import React, { use, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import axios from 'axios';

export default function page() {

    var [bydate,setbyDate]=useState([])
    const [exdata,setData]=useState([]) 
    useEffect(() => {

   
  
}, []);

    const formik=useFormik({
        initialValues: {},
        validationSchema:object({

        }),
        onSubmit:(values,{resetForm})=>{
         
            axios.post('http://localhost:3000/expense/expensesbydate',values)
            .then(response=>{
                setData(response.data)
               

               
                ok(response.data)
            })
            .catch(err=>{
                console.log(err);
            })



          
           
            resetForm(values)
        }


        
    })

 
   
   
function ok(exdata){
    

    var arr=[]
    
   exdata && exdata.forEach(item=>{
        if (arr.length<1) {
            arr.push(item)
            
        }
        else{
            arr.forEach(bd=>{
                if(bd.date==item.date){
                    bd.ammount=bd.ammount+item.ammount;
                }
                else{
                    arr.push(item)
                }
            })
        }

        setbyDate(arr)
       
    })

}

console.log(bydate);

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


{bydate && (<div class="w-3/4 mx-auto mt-16 p-4 sm:ml-64">
        <div class="bg-gray-50 shadow-md rounded my-6">    
      <table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Driver Name</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Rent </th>

                
              </tr>
            </thead>
            <tbody>
              {bydate && bydate.map((item) => {
                return (
                  <tr  class="hover:bg-gray-200">
                    <td class="py-4 px-6 border-b border-grey-light">{item.date}</td>
                    <td>{item.ammount}</td>
                   
                   
                   
                    <td  class="py-4 px-6 border-b border-grey-light space-x-5">
                      <button class="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-4 border border-blue-700 rounded" onClick={()=>{ok.sub(item.id)}} >Book</button>

                    </td>
                    
                  </tr>
                );
                
              })}
            </tbody>
          </table>


          </div>  
      </div>     )}
</div> 
  
    </div>
  )
}
