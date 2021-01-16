import { useState, useEffect } from 'react';
import Pace from './components/Pace/Pace';
import Nav from './components/Nav/Nav';
import Page0 from './components/Pages/Page_0';
import Page11 from './components/Pages/Page_1_1';
import Page14 from './components/Pages/Page_1_4';
import Page15 from './components/Pages/Page_1_5';
import Page2 from './components/Pages/Page_2';
import Page3 from './components/Pages/Page_3';
import Page4 from './components/Pages/Page_4';
import './App.css';

function App() {
  const [isBodyClass, setIsBodyClass] = useState(false);
  const [isfirstWrap, setIsfirstWrap] = useState(false);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [wrap, setWrap] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [activeSection, setActiveSection] = useState({
    isActive0: false,
    isActive11: false,
    isActive14: false,
    isActive15: false,
    isActive2: false,
    isActive3: false,
    isActive4: false
  })

  const handleChange = (name) => {
    let newState = {...activeSection};
    newState.isActive0 = false;
    for (let key in newState) {
      let element = newState[key];
      if(element) {
        newState[key] = false;
      }
    }
    setActiveSection(prevState => ({
        ...newState,
        [name]: true
    }));
  };

  const classes = {
    pageWrap: `page_wrap ${isBodyClass ? 'visible' : ''}`
  }

  const handleLoad = e => {
    if(!isDomLoaded) {
      setIsDomLoaded(true);
    }
  }

  const handlingKeyboardEvents = e => {
    if(isModal) {
      return
    }
    // console.log(e.key);
    // switch (e.key) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
  }

  useEffect(() => {
    window.addEventListener('load', handleLoad);
    window.addEventListener('keyup', handlingKeyboardEvents);
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('keyup', handlingKeyboardEvents);
    }
  }, [handlingKeyboardEvents])

  return (
    <>
      <Pace isDomLoaded={isDomLoaded} handleChange={handleChange} setBodyClass={setIsBodyClass} />
      <div id="appWrapper" className="appWrapper">
        <div className="pace-blackout"></div>
        <Nav wrap={wrap} setWrap={setWrap} changeFirstWrap={setIsfirstWrap} isfirstWrap={isfirstWrap} activeSection={activeSection} handleChange={handleChange} />
        <div className={classes.pageWrap}>
        {}
        {activeSection.isActive0 ?
          <Page0 setWrap={setWrap} changeFirstWrap={setIsfirstWrap} handleChange={handleChange} /> : null 
        }
        {activeSection.isActive11 ?
          <Page11 handleChange={handleChange} /> : null 
        }
        {activeSection.isActive14 ?
          <Page14 handleChange={handleChange} /> : null 
        }
        {activeSection.isActive15 ?
          <Page15 handleChange={handleChange} /> : null 
        }
        {activeSection.isActive2 ?
          <Page2 isModal={isModal} setIsModal={setIsModal} handleChange={handleChange} /> : null 
        }
        {activeSection.isActive3 ?
          <Page3 isModal={isModal} setIsModal={setIsModal} handleChange={handleChange} /> : null 
        }
        {activeSection.isActive4 ?
          <Page4 handleChange={handleChange} /> : null 
        }
        </div>
      </div>
    </>
  );
}

export default App;
