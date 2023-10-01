import {React, useState, useEffect} from 'react'
import icon from './assets/authlogo.png'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import webcard_1 from './assets/WEB CARD (5).png'
import fb from './assets/facebook.png'
import wa from './assets/whatsapp.png'
import tm from './assets/telegram.png'



function SavedVideos(){
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

    <div className="head-text ml-10 mt-10">
        <p className='mb-10'>Home/Recent videos/How to create a Facebook Ad post</p>
            <h1 className='text-2xl font-bold'>How to create a Facebook Ad listing</h1>
        
        </div>

        <section className='flex flex-col items-center w-full mt-8'>
            <div className="video-cont w-full flex flex-col items-center">
                 <img src={webcard_1} className='w-3/4'></img>
            </div>

            <div className="limks flex justify-between w-3/4">
                <div className="input-box">
            <input className='p-5 bg-gray-300 mr-10 mt-5' placeholder='Search for your videos'></input>
            <p className='mt-10'>Share your video</p>
            <div className="socials flex items-center">

               <div className="google flex items-center justify-center p-3 m-4 bg-transparent border border-black text-center rounded-xl cursor-pointer">
             <img src={fb} alt="facebook" className="mr-2"></img>
             <p>Facebook</p>
        </div>

        <div className="google flex items-center justify-center p-3 m-4 bg-transparent border border-black text-center rounded-xl cursor-pointer">
             <img src={wa} alt="whatsapp" className="mr-2"></img>
             <p>Whatsapp</p>
        </div>

        <div className="google flex items-center justify-center p-3 m-4 bg-transparent border border-black text-center rounded-xl cursor-pointer">
             <img src={tm} alt="telegram" className="mr-2"></img>
             <p>Telegram</p>
        </div>
            </div>
            
        </div>
        <div className="input-box">
            <input className='p-5 bg-gray-300 mr-10 mt-5' placeholder='Search for your videos'></input>
        </div>
            </div>

            
           
        </section>
    
    </>
)
}

export default SavedVideos