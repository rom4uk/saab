import { useState, useEffect, useRef } from 'react';
import Pace from './components/Pace/Pace';
import Nav from './components/Nav/Nav';
import Page0 from './components/Pages/Page_0';
import Page1 from './components/Pages/Page_1';
import Page2 from './components/Pages/Page_2';
import Page3 from './components/Pages/Page_3';
import Page4 from './components/Pages/Page_4';
import Page5 from './components/Pages/Page_5';
import Page6 from './components/Pages/Page_6';

import { 
  switchPageVisible, 
  hideActiveElems, 
  setLabelActive, 
  wrapActivate, 
  wrapDeactivate
} from './helpers/helpers';

import './App.css';

function App() {
  const [isBodyClass, setIsBodyClass] = useState(false);
  const [isfirstWrap, setIsfirstWrap] = useState(false);
  const [isDomLoaded, setIsDomLoaded] = useState(false);
  const [wrap, setWrap] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [activeSection, setActiveSection] = useState({
    isActive0: false,
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    isActive5: false,
    isActive6: false
  })

  const navRef = useRef(null);

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

  const changePages = (pageId) => {
    if(activeSection[pageId]) {
      return;
    }
    let pageIdx = +pageId.charAt(pageId.length - 1);
    const navLinks = navRef.current.querySelectorAll('.sceneNav__link');
    hideActiveElems(navLinks);
    navLinks[pageIdx].classList.add('active');
    setLabelActive(navLinks[pageIdx]);
    if(!(pageIdx > 0 && pageIdx < 4)) {
      wrapDeactivate(setWrap);
      setIsfirstWrap(false);
    }
    if(pageIdx > 0 && pageIdx < 4) {
      wrapActivate(setWrap);
    }
    switchPageVisible();
    setTimeout(() => {
      setCurrentPageIdx(prev => pageIdx);
      handleChange(pageId);
    }, 300);
  }

  const handlingKeyboardEvents = e => {
    if(isModal) return;
    const nav = navRef.current;
    switch (e.key) {
      case "ArrowUp":
        let prevIndex = +currentPageIdx - 1;
        if(prevIndex < 0) return;
        changePages(`isActive${prevIndex}`);
        setCurrentPageIdx(prev => prevIndex);
        break;
      case "ArrowDown":
        let nextIndex = +currentPageIdx + 1;
        if(nextIndex > Object.keys(activeSection).length - 1) return;
        changePages(`isActive${nextIndex}`);
        setCurrentPageIdx(prev => nextIndex);
        break;
      default:
        break;
    }
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
      <Pace 
        isDomLoaded={isDomLoaded} 
        handleChange={handleChange} 
        setBodyClass={setIsBodyClass} 
      />
      <div id="appWrapper" className="appWrapper">
        <div className="pace-blackout"></div>
        <Nav 
          currentPageIdx={currentPageIdx} 
          setCurrentPageIdx={setCurrentPageIdx} 
          wrap={wrap} 
          setWrap={setWrap} 
          setIsfirstWrap={setIsfirstWrap} 
          isfirstWrap={isfirstWrap} 
          activeSection={activeSection} 
          handleChange={handleChange} 
          navRef={navRef}
          changePages={changePages}
        />
        <div className={classes.pageWrap}>
        {}
        {activeSection.isActive0 ?
          <Page0 setCurrentPageIdx={setCurrentPageIdx} setWrap={setWrap} changeFirstWrap={setIsfirstWrap} handleChange={handleChange} /> : null 
        }
        {activeSection.isActive1 ?
          <Page1 setCurrentPageIdx={setCurrentPageIdx} handleChange={handleChange} /> : null 
        }
        {activeSection.isActive2 ?
          <Page2 setCurrentPageIdx={setCurrentPageIdx} handleChange={handleChange} /> : null 
        }
        {activeSection.isActive3 ?
          <Page3 setCurrentPageIdx={setCurrentPageIdx} handleChange={handleChange} /> : null 
        }
        {activeSection.isActive4 ?
          <Page4 setCurrentPageIdx={setCurrentPageIdx} isModal={isModal} setIsModal={setIsModal} handleChange={handleChange} /> : null 
        }
        {activeSection.isActive5 ?
          <Page5 setCurrentPageIdx={setCurrentPageIdx} isModal={isModal} setIsModal={setIsModal} handleChange={handleChange} /> : null 
        }
        {activeSection.isActive6 ?
          <Page6 setCurrentPageIdx={setCurrentPageIdx} handleChange={handleChange} /> : null 
        }
        </div>
      </div>
    </>
  );
}

export default App;
