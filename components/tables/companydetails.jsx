'use client'
import React, { useEffect, useState } from 'react'

const Companydetails = () => {


    // const UserData = [
    //     {
    //         "id":1,
    //         Name:"Guru",
    //         email:"Gurustreams@gmail.com",
    //         Role:"Director Human Resources",
    //         company:"Streams Software Solution Pvt Ltd",
    //         Location:"Coimbatore"
    //     },
    //     {
    //         "id":2,
    //         Name:"Kishore Babu",
    //         email:"KishoreBabu420@gmail.com",
    //         Role:"Streams Trainer",
    //         company:"Streams Software Solution Pvt Ltd",
    //         Location:"Coimbatore"
    //     },
    //     {
    //         "id":3,
    //         Name:"Gayathiri",
    //         email:"gayathiristreams@gmail.com",
    //         Role:"Technical Recruitor",
    //         company:"Streams Software Solution Pvt Ltd",
    //         Location:"Coimbatore"
    //     },
    //     {
    //         "id":4,
    //         Name:"Rashmi",
    //         email:"rashmi@gmail.com",
    //         Role:"Technical Recruitor",
    //         company:"Streams Software Solution Pvt Ltd",
    //         Location:"Coimbatore"
    //     },
    //     {
    //         "id":5,
    //         Name:"Habirami",
    //         email:"Habiramistreams@gmail.com",
    //         Role:"Technical Recurtior",
    //         company:"Streams Software Solution Pvt Ltd",
    //         Location:"Coimbatore"
    //     },
    //     {
    //         "id":6,
    //         Name:"Nikila",
    //         email:"nikilaranistreams@gmail.com",
    //         Role:"Business Development",
    //         company:"Streams Software Solution Pvt Ltd",
    //         Location:"Coimbatore"
    //     },
    //     {
    //         "id":7,
    //         Name:"Elakiyan",
    //         email:"elakiyanstreams@gmail.com",
    //         Role:"Technical Recurtior",
    //         company:"Streams Software Solution Pvt Ltd",
    //         Location:"Coimbatore"
    //     },
        
        

    // ];


    const [getUserData,setGetUserData] = useState('')

    useEffect(()=>{
        const getUser=async ()=>{
            const reqdata = await fetch("https://jsonplaceholder.typicode.com/todos")
            const resdata = await reqdata.json();
            // console.log(resdata);
            setGetUserData(resdata)
        }
        getUser();
    },[]);
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default Companydetails;
