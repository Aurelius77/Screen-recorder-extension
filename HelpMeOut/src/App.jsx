import {React} from 'react'
import Video from './Video'
import Landing from './LandingPage'
import Auth from './Auth'
import Dashboard from './Dashboard'
import SavedVideos from './SavedVideos'
import './App.css'
import {Route, Routes} from 'react-router-dom'

function App(){
return(
  <>
  <Routes>
    <Route path='/' element={<Landing/>}></Route>
    <Route path='/video' element={<Video/>}></Route>
    <Route path='/Auth' element={<Auth/>}></Route>
    <Route path ='/Dashboard' element={<Dashboard/>}></Route>
    <Route path ='/saved' element={<SavedVideos/>}></Route>
  </Routes>
  </>
)
}


export default App