import React from 'react'
import icon from './assets/icon_small.png'
import edit from './assets/edit.png'
import icon_small from './assets/icon.png'
import webcard_1 from './assets/WEB CARD (5).png'
import fb from './assets/facebook.png'
import wa from './assets/whatsapp.png'
import tm from './assets/telegram.png'
import {Link} from 'react-router-dom'
import './App.css'
import { set } from 'mongoose'

function Video(){
  const [videos, setVideos] = React.useState([])
 const [newVids, setNewVids] = React.useState([])

  React.useEffect(() => {
  const fetchVideos = async () => {
    const apiUrl = 'https://chrome-extension-iq7f.onrender.com/videos';

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }

      const data = await response.json();
      const videosArray = data.videos;
      console.log(videosArray)
      const filteredArray = videosArray.filter((video)=>{
        return video.video_url.includes('screen-recording')
      })
      console.log(filteredArray)
      setVideos(filteredArray);
      console.log(videos)

      
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchVideos();
}, []);






    return(
        <>
        <nav className='flex items-center justify-between p-3'>
      <div className="first flex items-center m-3 font-bold">
<img src={icon} alt='logo' className='w-1/5 m-3'></img>
<h1 className='m-3 logo-text text-2xl'>HelpMeOut</h1>
      </div>
      <div className="second midnav flex items-center justify-center font-bold">
        <h1 className='m-3 text-center'>Features</h1>
        <h1 className='m-3 text-center'>How it works</h1>
      </div>
      <div className="third flex items-center justify-center">
        <h1 className='text-center mr-5 started font-bold'>Get Started</h1>
      </div>
        </nav>


         <main className='flex items-center mt-10'>
<div className="left-main  w-1/2">
    <h1 className='text-3xl font-bold ml-10'>Your video is ready!</h1>
    <p className='mt-10 ml-10'>Name</p>
    <input className=' ml-10 text-2xl video_name bg-transparent border-opacity-100'
           placeholder="Untitled_Video_20232509"
    ></input>

    <div className="input-box">
            <input className='p-5 bg-gray-300 ml-10 mt-5 w-3/4 rounded-xl' placeholder='Enter Email to send'></input>
        </div>

        <div className="input-box">
            <input className='p-5 bg-gray-300 ml-10 mt-5 w-3/4 rounded-xl' value={videos.length > 0? videos[0].video_url : ''}></input>
        </div>

        <p className='mt-10 ml-10'>Share your video</p>
            <div className="socials flex items-center ml-10">

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


<div className="right-main w-1/2 mr-5">
  {videos.length > 0 ? <video controls src={videos[0].video_url}></video> : <img src={webcard_1}></img>}
</div>
         </main>

         <section className='flex flex-col items-center mt-20 pb-16'>
           <h1 className='text-center text-2xl w-1/2 font-bold'>To ensure the availability and privacy of your video, we recommend saving it to your account.</h1>
           <button className='footer rounded-xl mt-5 p-3'>Save video</button>
           <p className='mt-5'>Don't have an account? <Link to ='/Auth'><span className='started underline font-bold'>Create account</span></Link></p>
         </section>



         <footer className='pt-10 footer'>
         <div className="flex flex-wrap justify-between">
  <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex items-start">
    <img src={icon_small}></img>
    <p className="text-center text-2xl">HelpMeOut</p>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/4 p-4">
    <p className='mb-5'><a className="text-center" href='#'>Menu</a></p>
    <p className='mb-5'><a className="text-center " href='#home'>Home</a></p>
    <p className='mb-5'><a className="text-center " href='#home'>Converter</a></p>
    <p className='mb-5'><a className="text-center " href='#works'>How it works</a></p>
  </div>
  <div className="w-full sm:w-1/2 md:w-1/4 p-4">
    <p className='mb-5'><a className="text-center" href='#'>About us</a></p>
    <p className='mb-5'><a className="text-center" href='#'>About</a></p>
    <p className='mb-5'><a className="text-center" href='#'>Contact Us</a></p>
    <p className='mb-5'><a className="text-center" href='#'>Privacy Policy</a></p>
    
  </div>
  <div className="w-full sm:w-1/2 md:w-1/4 p-4">
    <p className='mb-5'><a className="text-center" href='https://github.com/Aurelius77/Screen-recorder-extension.git'>Screen Record</a></p>
    <p className='mb-5'><a className="text-center" href='#'>Browser Window</a></p>
    <p className='mb-5'><a className="text-center" href='#'>Desktop</a></p>
    <p className='mb-5'><a className="text-center" href='#'>Application</a></p>
  </div>
</div>

        </footer>
        </>
    )
}

export default Video