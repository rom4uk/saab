import { useState, useEffect } from 'react';

import { switchPageVisible, hideActiveElems} from '../../helpers/helpers';
import Logo from '../common/Logo';

const Page0 = ({setWrap, handleChange, changeFirstWrap}) => {
  const [sceneNavLinks, setSceneNavLinks] = useState(null);

  const deploy = () => {
    hideActiveElems(sceneNavLinks); //деактивуєм всі нави
    switchPageVisible(); //переключаєм екран
    changeFirstWrap(true);//активуєм 11 екран в навігації
    setTimeout(() => {
      setWrap(true)
    }, 100)
    setTimeout(() => {
      handleChange('isActive11');
    }, 300);
  }

  useEffect(() => {
    setSceneNavLinks(document.querySelectorAll('.sceneNav__link'));
  }, [])

  console.log('Page0')
  return (
    <div id="page_0" className="page active">
      <Logo handleChange={handleChange} isActiveTop={true} title={true} />
      <div id="title_block" className="title_block">
        <div className="title_block__main">
          <div className="title_block__title">
            Deployable&nbsp;Aircraft&nbsp;Maintenance&nbsp;Facility
          </div> 
          <div className="title_block__subtitle">
            Enhanced&nbsp;capability
            <br />
            anywhere,&nbsp;anytime.
          </div>
        </div> 
        <div className="title_block_sub">
          <div className="title_block__body">
            Availability is essential to an aircraft fleet, especially when operating out of remotely located and dispersed forward bases.
          </div>
        </div>
        </div> 
        <div className="mission_cta_two" onClick={() => deploy()}>
          <div className="ui_highlight active">
            <div className="bg"></div> 
            <div className="fg">
              <div className="fg_inner"></div> 
              <svg width="24" height="24" viewBox="0 0 24 24" className="fg_plus">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
            </div>
          </div> 
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path>
          </svg> 
          <div className="mission_cta_two__label">
            <span className="emphasis">Deploy</span>
            <span>Aircraft Maintenance Capability</span>
          </div>
        </div>
      </div>
  )
}

export default Page0;