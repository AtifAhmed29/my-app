'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Barchart from '../barchart';


export default function page() {
    const [data,setData]=useState([])
    const [avg,setAvg]=useState([])

useEffect(() => {
 
    axios.get('http://localhost:3000/expense/all')
    .then(response=>{

        predict(response.data)
        setData(response.data)
    })
    .catch(err=>{
        console.log(err);
    })





}, []);


function sum(x){
    var sum=0
    x.forEach(i=>{

        sum+=i;
    })
    return sum;
}

function predict(transactions){




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
    
    var s=sumofList(transactionsByDate[key])
    // var tr={
    //  date:key.slice(0,10),
    //  ammount:s
    // }
 
    lsitof.push(s)
   }


   function sumofList(values) {
    var sum =0
    var day=''
    var list=[]
     values.forEach(element=>{
 
    
       sum += element.ammount;
   
       day=element.day
        // var tr={
        // day:element.day,
        // ammount:s
        // }
        // list.push(tr)

       
     })
     return {day:day,sum:sum};
    }
 

    var saturday=[]
    var sunday=[]
    var monday=[]
    var tuesday=[]
    var wednesday=[]
    var thursday=[]
    var friday=[]
    var predict=[]
   

    saturday.push(0)
    sunday.push(0)
    monday.push(0)
    tuesday.push(0)
    wednesday.push(0)
    thursday.push(0)
    friday.push(0)
  

    console.log(lsitof);

    lsitof.forEach(element => {
        if(element.day=='Saturday'){

           
            saturday.push(element.sum)
        }
        else if(element.day=='Sunday'){
            sunday.push(element.sum)
        }
        else if(element.day=='Monday'){
            monday.push(element.sum)
        }
        else if(element.day=='Tuesday'){
            tuesday.push(element.sum)
        }
        else if(element.day=='Wednesday'){
            wednesday.push(element.sum)
        }
        else if(element.day=='Thursday'){
            thursday.push(element.sum)
        }
        else if(element.day=='Friday'){
            friday.push(element.sum)
        }

      
        
    });

    predict.push(sum(saturday)/saturday.length)
    predict.push(sum(sunday)/sunday.length)
    predict.push(sum(monday)/monday.length)
    predict.push(sum(tuesday)/tuesday.length)
    predict.push(sum(wednesday)/wednesday.length)
    predict.push(sum(thursday)/thursday.length)
    predict.push(sum(friday)/friday.length)

    setAvg(predict)
    console.log(predict);
}


function NextSevenDays(){
    var label=[]
   
    
  
    
    for (var i=0; i<7; i++){
        var d= new Date()
        d.setDate(d.getDate()+i)
       
        label.push(d.toDateString().slice(0,10))
    }
  
    return label;
}




function maper(avg,days){
  var  listofObject=[]
    days.forEach(item=>{
       

        const obj={
            day:'',
            avg:0
        }

        if (item.slice(0,3)==='Sat') {
            listofObject.push(avg[0])
        }
        if (item.slice(0,3)==='Sun') {
            listofObject.push(avg[1])
        }
        if (item.slice(0,3)==='Mon') {
            listofObject.push(avg[2])
        }
        if (item.slice(0,3)==='Tue') {
            listofObject.push(avg[3])
        }
        if (item.slice(0,3)==='Wed') {
            listofObject.push(avg[4])
        }
        if (item.slice(0,3)==='Thu') {
            listofObject.push(avg[5])
        }
        if (item.slice(0,3)==='Fri') {
            listofObject.push(avg[6])
        }


    })

    return listofObject;
}






console.log(NextSevenDays());

  return (
    <div>
      <Barchart data={maper(avg,NextSevenDays())} label={NextSevenDays()} />
    </div>
  )
}




    