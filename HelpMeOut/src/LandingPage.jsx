import {React} from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import icon from './assets/icon.png'
import icon_small from './assets/icon_small.png'
import large from './assets/large-image.png'
import small_one from './assets/small-image-1.png'
import small_two from './assets/small-image-2.png'
import share from './assets/share.png'
import record from './assets/record.png'
import memories from './assets/memories.png'
import example from './assets/example.png'
import one from './assets/one.png'
import two from './assets/two.png'
import three from './assets/three.png'
import sample from './assets/sample.png'


function Landing(){
 return(
    <>
      <nav className='flex items-center justify-between p-3' id='home'>
      <div className="first flex items-center m-3 font-bold">
<img src={icon} alt='logo' className='w-1/5 m-3'></img>
<h1 className='m-3 logo-text text-2xl'>HelpMeOut</h1>
      </div>
      <div className="second midnav flex items-center justify-center font-bold max-sm:hidden">
        <h1 className='m-3 text-center'><a href='#features'>Features</a></h1>
        <h1 className='m-3 text-center'><a href = '#works'>How it works</a></h1>
      </div>
      <div className="third flex items-center justify-center">
        <Link to= '/Auth'>
        <h1 className='text-center mr-5 started font-bold'>Get Started</h1>
        </Link>
      </div>
        </nav>

        <section className='block lg:flex items-center landing-section'>
           <header className='lg:w-1/2 text-3xl landing-header p-3'>
                 <h1 className=' lg:text-5xl font-bold m-3 ml-10 mt-10'>Show Them</h1>
                 <h1 className='lg:text-5xl font-bold m-3 ml-10'>Don't Just Tell</h1>
                 <h3 className='lg:ml-10 m-3 text-2xl'>Help your friends and loved ones by creating and sending videos on how to get things done on a website.</h3>
          <button className='lg:mt-10 install-btn text-white font-bold py-2 px-4 rounded-lg ml-10'>Install HelpMeOut</button>
           </header>

           <div className="hero flex">
       <div className="w-1/2 p-2">
           <img src={small_one} alt="Image 1" className="w-full h-auto rounded-md"/>
          <img src={small_two} alt="Image 2" className="w-full h-auto mt-5 rounded-md"/>
      </div>
      <div className="w-1/2 p-2">
          <img src={large} alt="Image 3" className="w-full h-auto rounded-md"/>
       </div>

           </div>


        </section>

        <section className='pt-12' id='features'>
          <h1 className='font-bold text-3xl mt-10 text-center m-3'>Features</h1>
          <h3 className='text-center m-3 pb-20'>Key highlights of our extension</h3>
          <div className="body lg:flex items-center">


            <aside className='content lg:w-full'>

                <div className='w-2/3 mb-10'>
             <div className="top flex items-center m-6">
                <img src={record} className='ml-2'></img>
                <h2 className='text-xl font-bold deep ml-2'>Simple Screen recording</h2>
             </div>
             <p className='ml-8'>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
             </div>

             <div className='w-2/3 mb-10'>
             <div className="top flex items-center m-6">
                <img src={share} className='ml-2'></img>
                <h2 className='text-xl font-bold deep ml-2'>Easy-to-share URL</h2>
             </div>
             <p className='ml-8'>Share your recordings instantly with a single link. No attachments, no downloads.</p>
             </div>

             <div className='w-2/3'>
             <div className="top flex items-center m-6">
                <img src={memories} className='ml-2'></img>
                <h2 className='text-xl font-bold deep ml-2'>Revisit Recordings</h2>
             </div>
             <p className='ml-8'>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
             </div>


            </aside>

            <div className="container w-2/3 flex justify-center items-center">
                <img src={example} alt='screen-record' className='mr-10'></img>
            </div>
          </div>
        </section>

        <section className='pt-20 pb-5' id='works'>
            <h1 className='text-center font-bold text-3xl'>How it works.</h1>
            <div className="details lg:flex items-center text-center">
                <div className="detail flex flex-col items-center w-3/4">
                    <img src={one} className='m-3'></img>
                    <h1 className='deep text-2xl m-3'>Record Screen</h1>
                    <h3 className='desc m-3'>Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</h3>
                    <img src={sample}></img>
                </div>

                <div className="detail flex flex-col items-center w-3/4">
                    <img src={two} className='m-3'></img>
                    <h1 className='deep text-2xl m-3'>Share your Recording</h1>
                    <h3 className='desc m-3'>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</h3>
                    <img src={sample}></img>
                </div>

                <div className="detail flex flex-col items-center w-3/4">
                    <img src={three} className='m-3'></img>
                    <h1 className='deep text-2xl m-3'>Learn Effortlessly</h1>
                    <h3 className='desc m-3'>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</h3>
                    <img src={sample}></img>
                </div>

            </div>
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

export default Landing