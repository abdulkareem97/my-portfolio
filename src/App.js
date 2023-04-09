import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


import Dashboard from "./layout/Dashboard";
import LockScreen from "./pages/LockScreen/LockScreen";
// import LockScreenOpen from "./pages/LockScreen/LockScreenOpen";
import Testing from "./component/Testing";
import LockScreenOpen from "./pages/LockScreen/LockScreenOpen";
import LockScreenNotification from "./pages/LockScreen/LockScreenNotification";
import Theme from "./pages/theme/Theme";
import Profile from "./pages/Profile/Profile";
import Gallery from "./pages/Gallery/Gallery";
import PlayStore from "./pages/PlayStore/PlayStore";
import Music from "./pages/Music/Music";
import Video from "./pages/Video/Video";
import Photo from "./pages/Photo/Photo";
import Chrome from "./pages/Chrome/Chrome";
// import Testing from "./component/testing";


function App() {

  const [bg,setBg] = useState('bg-bg2')
  // const navigate = useNavigate();

  // const [lockscreen,setLockScreen] = useState(true)
  // const [lockScreenOpen,setLockScreenOpen] = useState(false)
  // const handleLockScreen = ()=>{
  //   setLockScreen((e)=>!e)
  // }
  // const handleLockScreenOpen = ()=>{
  //   setLockScreenOpen((e)=>!e)
  // }
  // const openNotification = ()=>{
  //   if(no)


  // }
  const changeBg = (value) =>{
    setBg(value)
  }

  return (
    <>
    {/* {
      lockscreen && <LockScreen handleLockScreen={handleLockScreen} handleLockScreenOpen={handleLockScreenOpen}/>
    }
    {
      !lockscreen && lockScreenOpen && <LockScreenOpen handleLockScreen={handleLockScreen} handleLockScreenOpen={handleLockScreenOpen}/>

    } */}

<BrowserRouter >
      {/* <Header /> */}
      <Routes >
        <Route path='/' element={<LockScreen />}/>
        <Route path='/open' element={<LockScreenOpen />}/>
        <Route path='/openNotification' element={<LockScreenNotification />}/>
        <Route path='/dashboard'  element={<Dashboard  bg={bg}/>}/>
        <Route path='/theme' element={<Theme changeBg={changeBg}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/playStore' element={<PlayStore/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/photo' element={<Photo/>}/>
        <Route path='/chrome' element={<Chrome/>}/>

        {/* <Route path='/fact' element={<Fact />}/>
        <Route path='/breeds' element={<Breeds />}/>
        <Route path='/breeds/:name' element={<BreedDetails />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
      
    </>
  );
}

export default App;
