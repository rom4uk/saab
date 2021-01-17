import { useState, useEffect } from 'react';

import Logo from '../common/Logo';
import {page3ButtonsConfig} from './elements/buttonsConfig';
import HotswapButton from './elements/HotswapButton'

const Page3 = ({changePages}) => {
  const [expanded, setExpanded] = useState(false);
  const [toggledItems, setToggledItems] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const classes = {
    Maintenance: `${toggledItems["0"] ? 'hotswap_button radio active' : 'hotswap_button radio'}`,
    Sheltering: `${toggledItems["1"] ? 'hotswap_button radio active' : 'hotswap_button radio'}`,
    Helicopters: `${toggledItems["2"] ? 'hotswap_button radio active' : 'hotswap_button radio'}`,
    OtherVehicles: `${toggledItems["3"] ? 'hotswap_button radio active' : 'hotswap_button radio'}`,
    expanded: `${expanded ? 'hotswap_wrap hotswap_wrap--extended active' : 'hotswap_wrap hotswap_wrap--extended'}`,
    expandedButton: `${expanded ? 'hotswap_button active' : 'hotswap_button'}`,
  }

  const toggleItems = (idx) => {
    const newItems = {...toggledItems};
    for (const key in newItems) {
      if (Object.hasOwnProperty.call(newItems, key)) {
        if(+key === idx) {
          newItems[key] = !newItems[key];
        } else {
          newItems[key] = false;
        }
      }
    }
    setToggledItems(newItems);
  }

  const handlingExpanded = (e) => {
    switch (+e.key) {
      case 1:
        toggleItems(0);
        break;
      case 2:
        toggleItems(1);
        break;
      case 3:
        toggleItems(2);
        break;
      case 4:
        toggleItems(3);
        break;
      case 5:
        setExpanded(prev => !prev);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handlingExpanded)
    return () => {
      window.removeEventListener('keyup', handlingExpanded)
    }
  }, [handlingExpanded])

  return (
    <div id="page_1_5" className="page active">
      <div className="sidebar">
        <Logo handleChange={changePages} isActiveTop={true} />
        <div className="sidebar_textbox">
          <div className="sidebar_textbox__header">
            <span className="sidebar_textbox__title">A multipurpose asset</span>
          </div> 
          <div className="sidebar_textbox__main">
            <div className="sidebar_textbox__body">
              <p className="sidebar_textbox__paragraph">
                Due to its versatile design, the hangar can fit a great range of available fixed-wing fighter aircraft and helicopters.
              </p> 
              <p className="sidebar_textbox__subtitle">Versatility</p> 
              <div className="sidebar_textbox__paragraph">
                <ul>
                  <li>
                    The standard 37m hangar can fit 2 aircraft for maintenance or 4 for sheltering, or a range&nbsp;of&nbsp;helicopters and other&nbsp;vehicles
                  </li> 
                  <li>
                    The facility’s flexibility allows for modular configuration depending on mission profile
                  </li> 
                  <li>
                    Extendable to unlimited length, enabling the possibility to dock an increased number of maintenance containers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
        <div className="scene_toggle_menu scene_toggle_menu--hotswap">
          <div className="scene_toggle_menu__title">
            <svg width="24" height="24" viewBox="0 0 24 24" className="filter_icon">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
            </svg> 
            <div className="scene_toggle_menu__title_label">View configurations</div>
          </div> 
          <div className="scene_toggle_menu__buttons">
            {page3ButtonsConfig.map((button, i) => <HotswapButton Elem={button.icon} title={button.title} className={classes[button.classname]} handler={toggleItems} idx={i} key={i} />)}
          </div> 
          <hr className="scene_toggle_menu__divider" /> 
          <div className="scene_toggle_menu__buttons" onClick={() => {setExpanded(prev => !prev)}}>
            <div className={classes.expandedButton}>
              <span className="checkmark"></span> 
              <span>Extendability</span>
            </div>
          </div>
        </div> 
        <div className="sidebar_footer">
          <a href="https://www.saab.com/dam" target="_blank" rel="noreferrer">saab.com/dam</a>
        </div>
      </div> 
      <div className="scene_wrap">
        <div className="hotswap_wrap hotswap_wrap--normal active">
          <div id="page_1_5_short_page_1_5_none" className="hotswap_item active"></div> 
          <div id="page_1_5_short_page_1_5_maintenance_gripen" className={toggledItems["0"] ? 'hotswap_item active' : 'hotswap_item'}></div> 
          <div id="page_1_5_short_page_1_5_shelter_gripen" className={toggledItems["1"] ? 'hotswap_item active' : 'hotswap_item'}></div> 
          <div id="page_1_5_short_page_1_5_shelter_helicopter" className={toggledItems["2"] ? 'hotswap_item active' : 'hotswap_item'}></div> 
          <div id="page_1_5_short_page_1_5_shelter_other" className={toggledItems["3"] ? 'hotswap_item active' : 'hotswap_item'}></div> 
          <div id="page_1_5_short_page_1_5_dam-measurements-3d_D3" className="hotswap_item active">
          </div>
        </div> 
        <div className={classes.expanded}>
          <div id="page_1_5_extended_page_1_5_none" className="hotswap_item active"></div> 
          <div id="page_1_5_extended_page_1_5_maintenance_gripen" className={toggledItems["0"] ? 'hotswap_item active' : 'hotswap_item'}></div> <div id="page_1_5_extended_page_1_5_shelter_gripen" className={toggledItems["1"] ? 'hotswap_item active' : 'hotswap_item'}></div> 
          <div id="page_1_5_extended_page_1_5_shelter_helicopter" className={toggledItems["2"] ? 'hotswap_item active' : 'hotswap_item'}></div> <div id="page_1_5_extended_page_1_5_shelter_other" className={toggledItems["3"] ? 'hotswap_item active' : 'hotswap_item'}></div>
        </div>
      </div>
    </div>
  )
}

export default Page3;