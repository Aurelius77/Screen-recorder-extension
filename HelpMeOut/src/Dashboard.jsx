import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import icon from './assets/authlogo.png'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import webcard_1 from './assets/WEB CARD (5).png'
import webcard_4 from './assets/WEB CARD.png'

function Dashboard(){
    const [username, setUsername] = useState('')
useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) { 
              setUsername(user.email)
            } else {
              console.log("user is logged out")
            }
          });
         
    }, [])

return(
    <>
     <div className="header flex items-center justify-between ml-10 mt-14">
        <div className="left  flex items-center">
            <img src={icon}></img>
        <h2>HelpMeOut</h2>
        </div>

        <h1 className='mr-10'>{username.length > 0 ? username : "John Mark"}</h1>
        
    </div>


    <section className='flex items-center justify-between'>
        <div className="head-text ml-10 mt-10">
            <h1 className='text-3xl font-bold'>Hello User,</h1>
        <p>Here are your recorded videos</p>
        </div>

        <div className="input-box">
            <input className='p-5 bg-gray-300 mr-10 mt-5' placeholder='Search for your videos'></input>
        </div>
        
    </section>
    <hr className='w-full mt-10 mb-10'></hr>

    <h3 className='ml-10 mt-10 text-2xl'>Recent files</h3>
    <div className="videos flex flex-wrap w-full items-center justify-evenly mt-5">
       <Link to ='/saved'>
       <div className='video mb-4'>
        <img src={webcard_1}></img>
       </div></Link>

       <Link to ='/saved'>
       <div className='video mb-4'>
        <img src={webcard_4}></img>
       </div></Link>


       <Link to ='/saved'>
       <div className='video mb-4'>
        <img src={webcard_1}></img>
       </div></Link>

       <Link to ='/saved'>
       <div className='video mb-4'>
        <img src={webcard_4}></img>
       </div></Link>

    </div>
    </>
)
}

export default Dashboard