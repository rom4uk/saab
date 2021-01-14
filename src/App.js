import { useState, useCallback, useEffect } from 'react';
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
  const [wrap, setWrap] = useState(false);
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

  // const active0 = useCallback(() => activeSection.isActive0, [activeSection.isActive0]);
  const active11 = useCallback(() => activeSection.isActive11, [activeSection.isActive11]);
  const active14 = useCallback(() => activeSection.isActive14, [activeSection.isActive14]);
  const active15 = useCallback(() => activeSection.isActive15, [activeSection.isActive15]);
  const active2 = useCallback(() => activeSection.isActive2, [activeSection.isActive2]);
  const active3 = useCallback(() => activeSection.isActive3, [activeSection.isActive3]);
  const active4 = useCallback(() => activeSection.isActive4, [activeSection.isActive4]);

  return (
    <>
      <Pace handleChange={handleChange} setBodyClass={setIsBodyClass} />
      <div id="appWrapper" className="appWrapper">
        <div className="pace-blackout"></div>
        <Nav wrap={wrap} setWrap={setWrap} changeFirstWrap={setIsfirstWrap} isfirstWrap={isfirstWrap} activeSection={activeSection} handleChange={handleChange} /* handlers={{
          handling0: setIsActive0,
          handling11: setIsActive11,
          handling14: setIsActive14,
          handling15: setIsActive15,
          handling2: setIsActive2,
          handling3: setIsActive3,
          handling4: setIsActive4,
        }} */ />
        <div className={classes.pageWrap}>{/* add visible class when need */}
        {}
        {activeSection.isActive0 ?
          <Page0 setWrap={setWrap} changeFirstWrap={setIsfirstWrap} handleChange={handleChange} /* active0={active0} */ /> : null 
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
          <Page2 handleChange={handleChange} /> : null 
        }
        {activeSection.isActive3 ?
          <Page3 handleChange={handleChange} /> : null 
        }
        {activeSection.isActive4 ?
          <Page4 handleChange={handleChange} /> : null 
        }
          {/* <Page11 active11={active11} /> 
          <Page14 active14={active14} />
          <Page15 active15={active15} />
          <Page2 active2={active2} />
          <Page3 active3={active3} />
          <Page4 active4={active4} />*/}
        </div>
        <div className="modal_backdrop"></div>
      </div>
    </>
  );
}

export default App;
