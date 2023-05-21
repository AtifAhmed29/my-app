'use client'
import React, { use, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

export default function page() {
  const [expense,setExpense]=useState({})
  const [triger,setTrigger]=useState('')
  const [click,setClick]=useState(true)

  useEffect(() => {
  setTrigger('')
  }, []);
    var [bydate,setbyDate]=useState([])
//     const [exdata,setData]=useState([]) 
//     useEffect(() => {

   
  
// }, []);



function handleDelete(id){
  axios.delete(`http://localhost:3000/expense/delete/${id}`)
  .then((response) => {
    window.location.reload();
console.log(response);
  })
  .catch((err) => {
    console.log(err);
  })
}

    const formik=useFormik({
        initialValues: {
          min:"",
          max:""
        },
        validationSchema:yup.object({

          min:yup.date().required(),
          max:yup.date().required()
          
        }),
        onSubmit:(values,{resetForm})=>{
          setbyDate([])
         setTrigger('')
            axios.post('http://localhost:3000/expense/expensesbydate',values)
            .then(response=>{
                // setData(response.data)
                
               

              //  makeList(response.data)
                ok(response.data)
            })
            .catch(err=>{
                console.log(err);
            })



          
           
            resetForm(values)
        }


        
    })

 
   function sumofList(values) {
   var sum =0
    values.forEach(element=>{

      sum += element.ammount;
    })
    return sum;
   }


   
function ok(transactions){
    
  const transactionsByDate = {};
  var lsitof=[]

  transactions.forEach(transaction => {
    const { date } = transaction;
    if (date in transactionsByDate) {
      transactionsByDate[date].push(transaction);
    } else {
      transactionsByDate[date] = [transaction];
    }
  });
  console.log(transactionsByDate);

  for (let key in transactionsByDate) {
   console.log(transactionsByDate[key]);
   var s=sumofList(transactionsByDate[key])
   var tr={
    date:key.slice(0,10),
    ammount:s
   }

   lsitof.push(tr)
  }

setExpense(transactionsByDate)
 setbyDate(lsitof)
}

function sum(bydate){
 var  sum=0;
 bydate.forEach(element => {
  
  sum += element.ammount;
 });
 return sum;
}



console.log(expense);
  return (
    <div>
     
<div className='w-full pl-80 pr-80 mt-20'>



<form  onSubmit={formik.handleSubmit}>


<div className="grid md:grid-cols-3 md:gap-8">
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


{bydate && (<div class="w-full ">
        <div class="bg-gray-50 shadow-md rounded my-6">    
      <table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Date</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Ammount </th>

                
              </tr>
            </thead>
            <tbody>
            {Object.keys(expense).map(date => (
               <>
                  <tr  class="hover:bg-gray-200">
                    <td class="py-4 px-6 border-b border-grey-light">Total Expense of {date}</td>
                    <td>{sumofList(expense[date])} Tk</td>
                   
                   
                   
                    <td  class="py-4 px-6 border-b border-grey-light space-x-5">
        <div class="relative" data-te-dropdown-ref>
  <button
    class="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-balck shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
    type="button"
    onClick={()=>{
      
     
        setTrigger(expense[date][0].date)
     
    }}
    id="dropdownMenuButton3"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="light">
    Primary
    <span class="ml-2 w-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  
    
</div>

                    </td>
                    
                  </tr>
                 


              {triger==date ? (
               <>
               <h1>Expense List</h1>
                <tr>
                  <td >
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                      <thead className='text-xs text-gray-700 uppercase bg-red-50 dark:bg-red-700 dark:text-gray-400' >
                        <tr>
                          <th scope='col' className='px-6 py-3'>Category</th>
                          <th scope='col' className='px-6 py-3'>Item Name</th>
                          <th scope='col' className='px-6 py-3' >Cost</th>
                          <th scope='col' className='px-6 py-3'>Update</th>
                        </tr>
                      </thead>
                   
                      <tbody>
                  {expense[date].map(transaction => (
                 
                      <tr className='bg-green-100 border-b dark:bg-green-100 dark:border-gray-700 hover:bg-green-200 dark:hover:bg-gray-600'>
                        <td  className='px-6 py-4'>
                          {transaction.category}
                        </td>
                        <td className='px-6 py-4'>
                          {transaction.title}
                        </td>
                        <td className='px-6 py-4'>
                          {transaction.ammount} Tk
                        </td>
                        <td className='px-6 py-4'>
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        <button onClick={()=>{handleDelete(transaction._id)}} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                        </td>
                      </tr>
                  
                ))}
                </tbody>
                </table>
                  </td>
                 </tr>
               </>
               ):null}
          
          </>
                ))}
              <tr className='hover:bg-gray-200'>
                <td className='py-4 px-6 border-b border-grey-light'> Total Expense </td>
                <td className='text-red-500'>  {sum(bydate)} Tk </td>

              </tr>
            </tbody>
          </table>



          </div>  
      </div>     )}


















</div> 
  
    </div>
  )
}
