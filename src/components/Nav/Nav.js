import React, { useState, useEffect } from 'react';

import { switchPageVisible, hideActiveElems} from '../../helpers/helpers';

const Nav = ({wrap, setWrap, activeSection, handleChange, isfirstWrap, changeFirstWrap}) => {

  const [sceneNavLinks, setSceneNavLinks] = useState(null);
  const classes = {
    wrap: `sceneNav__link_wrap ${wrap ? 'active' : ''}`,
    firstWrap: `sceneNav__link ${isfirstWrap ? 'active' : ''}`
  }

  const wrapActivate = () => {
    setTimeout(() => {
      setWrap(true)
    }, 100)
  }
  const wrapDeactivate = () => {
    setTimeout(() => {
      setWrap(false)
    }, 100)
  }

  const setLabelActive = (domElem) => {
    const label = domElem.querySelector('.sceneNav__label');
    label.classList.add('active');
    const timer = setTimeout(() => {
      label.classList.remove('active');
      clearTimeout(timer);
    }, 1000)
  }

  const changePages = (e, pageId, isWrapper) => {
    if(activeSection[pageId]) {
      return;
    }
    // console.log('pageId', pageId)
    hideActiveElems(sceneNavLinks);
    e.currentTarget.classList.add('active');
    setLabelActive(e.currentTarget);
    if(!isWrapper) {
      wrapDeactivate();
      changeFirstWrap(false);
    }
    switchPageVisible();
    setTimeout(() => {
      handleChange(pageId);
    }, 300);
  }

  useEffect(() => {
    setSceneNavLinks(document.querySelectorAll('.sceneNav__link'));
  }, [])

  return (
    <nav className="sceneNav">
      <div onClick={(e) => {changePages(e, 'isActive0')}} className="sceneNav__link home active">
        <div className="spot_bg">
          <svg id="home_icon" viewBox="0 0 24 24">
            <path id="home_path" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </div> 
        <div className="sceneNav__label">
          <div className="sceneNav__label__inner">Home</div>
        </div>
      </div> 
      <div className={classes.wrap} onClick={wrapActivate}>
        <div className={classes.firstWrap} onClick={(e) => {changePages(e, 'isActive11', true)}}>
          <div className="spot_bg">
            <div className="spot"></div>
          </div> 
          <div className="sceneNav__label">
            <div className="sceneNav__label__inner">Rapid deployment</div>
          </div>
        </div> 
        <div className="sceneNav__link" onClick={(e) => {changePages(e, 'isActive14', true)}}>
          <div className="spot_bg">
            <div className="spot"></div>
          </div> 
          <div className="sceneNav__label">
            <div className="sceneNav__label__inner">Assembly</div>
          </div>
        </div> 
        <div className="sceneNav__link" onClick={(e) => {changePages(e, 'isActive15', true)}}>
          <div className="spot_bg">
            <div className="spot"></div>
          </div> 
          <div className="sceneNav__label">
            <div className="sceneNav__label__inner">A&nbsp;multipurpose asset</div>
          </div>
        </div>
      </div> 
      <div onClick={(e) => {changePages(e, 'isActive2')}} className="sceneNav__link">
        <div className="spot_bg">
          <div className="spot"></div>
        </div> 
        <div className="sceneNav__label">
          <div className="sceneNav__label__inner">Maintenance&nbsp;containers</div>
        </div>
      </div> 
      <div onClick={(e) => {changePages(e, 'isActive3')}} className="sceneNav__link">
        <div className="spot_bg">
          <div className="spot"></div>
        </div> 
        <div className="sceneNav__label">
          <div className="sceneNav__label__inner">Multispectral&nbsp;protection</div>
        </div>
      </div> 
      <div onClick={(e) => {changePages(e, 'isActive4')}} className="sceneNav__link">
        <div className="spot_bg">
          <div className="spot"></div>
        </div> 
        <div className="sceneNav__label">
          <div className="sceneNav__label__inner">A&nbsp;system&nbsp;for all&nbsp;conditions</div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;