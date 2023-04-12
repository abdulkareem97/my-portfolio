import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
const LockScreen = () => {
  const navigate = useNavigate()
    const handleScreen = ()=> {
     
        navigate('/open')
        

    }
  return (
    <div className='' onDoubleClick={handleScreen}>
      <section className='bg-black text-white h-[100vh] flex flex-col justify-center items-center text-2xl'>
        <div className='bg-photo h-32 w-32 bg-cover rounded-full bg-no-repeat'>

        </div>
        <div>
          Akm - Portfolio
        </div>
        <div>
            Double Click To Open/Close
        </div>

      </section>
      {/* <WidgetComponent /> */}
    </div>

  )
}



function WidgetComponent() {
  const location = useLocation();

  useEffect(() => {
    console.log('here ' ,location)
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js";
    script.id = "aisensy-wa-widget";
    script.setAttribute("widget-id", "y4AphY");
    document.body.appendChild(script);
    console.log('here2 ',location.pathname)
    if(location.pathname !== '/')
    {
      console.log('here')
      document.body.removeChild(script)
    };
  }, [location]);
}









export default LockScreen
