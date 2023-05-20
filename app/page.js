
'use client'
import axios from 'axios';
import { useFormik } from 'formik'

import { object, string, number, date, InferType } from 'yup';
export default function Home() {


  

  
  
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
        
        

        console.log(response);
        
        
       
        
      })
      .catch(err=>{
        console.log(err);
      })
      
      resetForm({values})
    }
    
  })


  return (
   <>

  
<div className='w-full pl-96 pr-96 mt-20'>



<form onSubmit={formik.handleSubmit}>
  <div class="relative z-0 w-full mb-6 group">
      <input type="text" name="title" id="title" onChange={formik.handleChange} value={formik.values.title} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="title" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
  </div>
  <div class="relative z-0 w-full mb-6 group">
      <input type="number" name="ammount" id="ammount" onChange={formik.handleChange} value={formik.values.ammount} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
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
      <input type="text" name="notes" id="notes" onChange={formik.handleChange} value={formik.values.notes} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
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
