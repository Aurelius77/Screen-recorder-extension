import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import icon from './assets/authlogo.png'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';



function Auth(){
    const[errorMsg, setErrorMsg] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate =useNavigate()

  async function handleSubmit(){
       await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/Dashboard")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
  }



return(
    <>
    <div className="header flex items-center ml-10 mt-10">
        <img src={icon}></img>
        <h2>HelpMeOut</h2>
    </div>

<div className="Auth-cont text-center mt-5 flex items-center justify-center w-full">
    <div className='w-1/2'>
        <h1 className='text-3xl font-bold'>Log in or Sign up</h1>
        <p className='m-3'>Join millions of others in sharing successful moves on HelpMeOut.</p>

        <div className="google flex items-center justify-center p-3 m-4 bg-transparent border border-black text-center rounded-xl cursor-pointer">
             <img src={google} alt="Google" className="mr-2"></img>
             <p>Continue with Google</p>
        </div>

        <div className="facebook flex items-center justify-center p-3 m-4 bg-transparent border border-black text-center rounded-xl cursor-pointer">
             <img src={facebook} alt="Facebook" className="mr-2"></img>
             <p>Continue with Facebook</p>
        </div>

        <hr className='mt-5 mb-5'></hr>
        <p className='text-left ml-5'>Email:</p>
        <input
          type='text'
          value={email}
          required
          onChange={(e)=> setEmail(e.target.value)}
          placeholder='Enter your email address'
          className='p-3 m-4 bg-transparent border border-black rounded-xl w-full'
          >

          </input>

          <p className='text-left ml-5'>Password:</p>
           <input
          type='password'
          value={password}
          required
          onChange={(e)=> setPassword(e.target.value)}
          placeholder='Enter your password'
          className='p-3 m-4 bg-transparent border border-black  rounded-xl  w-full'
          >

          </input>
          <button
          onClick={handleSubmit}
          className='p-3 m-4 borderrounded-xl  w-full footer'
          >
            Sign up
            </button>
      </div>
         </div>
    </>
)
}

export default Auth