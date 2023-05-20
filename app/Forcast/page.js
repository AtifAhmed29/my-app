'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

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

function predict(data){
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
  

    data.forEach(element => {
        if(element.day=='Saturday'){

           
            saturday.push(element.ammount)
        }
        else if(element.day=='Sunday'){
            sunday.push(element.ammount)
        }
        else if(element.day=='Monday'){
            monday.push(element.ammount)
        }
        else if(element.day=='Tuesday'){
            tuesday.push(element.ammount)
        }
        else if(element.day=='Wednesday'){
            wednesday.push(element.ammount)
        }
        else if(element.day=='Thursday'){
            thursday.push(element.ammount)
        }
        else if(element.day=='Friday'){
            friday.push(element.ammount)
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
}



console.log(avg);

  return (
    <div>
      
    </div>
  )
}




    