
'use client'
import axios from 'axios';
import { useFormik } from 'formik'
import { useState } from 'react';

import { object, string, number, date, InferType } from 'yup';
export default function Home() {
const [alert,setAlert]=useState('')

  

  
  
  const formik =useFormik({
    initialValues:{
      
      title:'',
      ammount:'',
      category:'',
      day:'',
      date:'',
      notes:''
    },
    validationSchema:object({
      
    }),
    onSubmit:(values,{resetForm})=>{
      
      let date = new Date(values.date)
      let newday = date.toLocaleString('en-us', {weekday: 'long'});
      console.log(newday);
      values.day=newday
      console.log(values);
      axios.post('http://localhost:3000/expense/add', values)
      .then(response =>{
        
        

        setAlert('Data added successfully')
        console.log(response);
        
        
       
        
      })
      .catch(err=>{
        console.log(err);
        setAlert('Data is not saved')
      })
      
      resetForm()
    }
    
  })


  return (
   <>

  
<div className='w-full pl-96 pr-96 mt-20'>


{alert &&(
  <div class=" flex-end w-96  bg-green-100 border border-green-400 text-black px-4 py-3 rounded relative" role="alert">
  <strong class="font-bold">{alert}!</strong>
<span class="absolute top-0 bottom-0 right-0 px-4 py-3">
  <svg onClick={()=>{setAlert(null)}} class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
</span>
</div>
   ) 
  }
<form onSubmit={formik.handleSubmit}>
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="title" id="title" onChange={formik.handleChange}  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="number" name="ammount" id="ammount" onChange={formik.handleChange}  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="ammount" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ammount (Tk)</label>
  </div>



    <label for="underline_select" class="sr-only">Underline select</label>
  <select id="underline_select" name='category'  onChange={formik.handleChange} class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Category</option>
      <option value="eat">Eat Outs</option>
      <option value="gardening">Gardening</option>
      <option value="health">Healt Care</option>
      <option value="grocerie">Grouceries</option>
      <option value="utility">Utility</option>
      <option value="commute">Commutes</option>
      
  </select>

  <div class="relative z-0 mt-6 w-full mb-6 group">
      <input type="date" name="date" id="date" onChange={formik.handleChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Incurred On</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="notes" id="notes" onChange={formik.handleChange} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="notes" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Notes</label>
  </div>
  
 
  <div className='inline-flex'>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

  <button type="reset" class="text-white  bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
  </div>
</form>
</div>

   </>
  )
}
