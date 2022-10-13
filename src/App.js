import React, {useState, useEffect} from 'react';
import './app.css';
import Main from './components/main/main';
import SideNav from './components/sidebarNav/sideNav';
import { Circles } from 'react-loader-spinner';




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
 <div>
  {isLoading ?

  <div className='preloader'>
        <Circles
        height="50"
        width="50"
        color="#FF0099"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        isLoading={isLoading}
      /> 
    </div> 
      :
         <>
            <div className="sideNav">
            <SideNav />
          </div>

          <div className="mainContainer">
            <Main />
          </div>
         </>
            } 

 </div>
  );
}

export default App;
