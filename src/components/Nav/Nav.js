import React from 'react';

const Nav = ({ wrap, isfirstWrap, navRef, changePages }) => (
  <nav className="sceneNav" ref={navRef}>
    <div onClick={(e) => {changePages('isActive0')}} className="sceneNav__link home active">
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
    <div className={`sceneNav__link_wrap ${wrap ? 'active' : ''}`}>
      <div className={`sceneNav__link ${isfirstWrap ? 'active' : ''}`} onClick={(e) => {changePages('isActive1')}}>
        <div className="spot_bg">
          <div className="spot"></div>
        </div> 
        <div className="sceneNav__label">
          <div className="sceneNav__label__inner">Rapid deployment</div>
        </div>
      </div> 
      <div className="sceneNav__link" onClick={(e) => {changePages('isActive2')}}>
        <div className="spot_bg">
          <div className="spot"></div>
        </div> 
        <div className="sceneNav__label">
          <div className="sceneNav__label__inner">Assembly</div>
        </div>
      </div> 
      <div className="sceneNav__link" onClick={(e) => {changePages('isActive3')}}>
        <div className="spot_bg">
          <div className="spot"></div>
        </div> 
        <div className="sceneNav__label">
          <div className="sceneNav__label__inner">A&nbsp;multipurpose asset</div>
        </div>
      </div>
    </div> 
    <div onClick={(e) => {changePages('isActive4')}} className="sceneNav__link">
      <div className="spot_bg">
        <div className="spot"></div>
      </div> 
      <div className="sceneNav__label">
        <div className="sceneNav__label__inner">Maintenance&nbsp;containers</div>
      </div>
    </div> 
    <div onClick={(e) => {changePages('isActive5')}} className="sceneNav__link">
      <div className="spot_bg">
        <div className="spot"></div>
      </div> 
      <div className="sceneNav__label">
        <div className="sceneNav__label__inner">Multispectral&nbsp;protection</div>
      </div>
    </div> 
    <div onClick={(e) => {changePages('isActive6')}} className="sceneNav__link">
      <div className="spot_bg">
        <div className="spot"></div>
      </div> 
      <div className="sceneNav__label">
        <div className="sceneNav__label__inner">A&nbsp;system&nbsp;for all&nbsp;conditions</div>
      </div>
    </div>
  </nav>
)

export default Nav;