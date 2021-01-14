import React, { useState, useEffect } from 'react';

import logoLight from '../../img/logo/saab_logo_light.svg';
import logoDark from '../../img/logo/saab_logo_dark.svg';
import ultraViolet from '../../icons/ultra_violet.svg';
import nearInfrared from '../../icons/near_infrared.svg';
import thermalInfrared from '../../icons/thermal_infrared.svg';
import radar from '../../icons/radar.svg';
import visual from '../../icons/visual.svg';

const Page3 = () => {

  useEffect(() => {
  }, [])

  return (
    <div id="page_3" className="page active">
      <div className="sidebar">
        <div className="saab_logo">
        <img src={logoLight} alt="SAAB Logo" className="active"/> 
        <img src={logoDark} alt="SAAB Logo" className="" />
        </div> 
        <div className="sidebar_textbox">
          <div className="sidebar_textbox__header">
            <span className="sidebar_textbox__title">Multispectral Protection</span>
          </div> 
          <div className="sidebar_textbox__main">
            <div className="sidebar_textbox__body">
              <p className="sidebar_textbox__paragraph">
                Barracuda multispectral camouflage covers the hangar and maintenance containers and offers superior sensor threat protection for increased survivability.
              </p> 
              <p className="sidebar_textbox__subtitle">Total protection</p> 
              <p className="sidebar_textbox__paragraph">
                <ul>
                  <li>
                    The solution provides protection for personnel, vehicles and infrastructure against hostile sensors and enemy target acquisition
                  </li> 
                  <li>
                    Multispectral camouflage also limits the effect of sun radiation, contributing to reduced internal temperature in the covered objects
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div> 
        <div className="sidebar_footer">
          <a href="https://www.saab.com/dam" target="_blank">saab.com/dam</a>
        </div>
      </div> 
      <div className="scene_wrap">
        <div className="scene_wrap__inner">
          <div className="stp_menu">
            <div className="stp_menu__grid">
              <div className="stp_grid__cell ui_fadein">
                <div className="stp_item">
                  <svg width="201" height="201" viewBox="0 0 201 201" className="tab-expand">
                    <polygon points="201 201 0 0 201 0 201 201" className="bg"></polygon> 
                    <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" className="plus">
                    </path>
                  </svg> 
                  <div className="stp_icon">
                    <img src={ultraViolet} alt="" className="stp_icon_svg" />
                  </div> 
                  <div className="stp_title">Ultra violet</div>
                </div>
              </div> 
              <div className="stp_grid__cell ui_fadein">
                <div className="stp_item">
                  <svg width="201" height="201" viewBox="0 0 201 201" className="tab-expand">
                    <polygon points="201 201 0 0 201 0 201 201" className="bg"></polygon> 
                    <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" className="plus">
                    </path>
                  </svg> 
                  <div className="stp_icon">
                    <img src={nearInfrared} alt="" className="stp_icon_svg" />
                  </div> 
                  <div className="stp_title">Near infrared</div>
                </div>
              </div> 
              <div className="stp_grid__cell ui_fadein">
                <div className="stp_item">
                  <svg width="201" height="201" viewBox="0 0 201 201" className="tab-expand">
                    <polygon points="201 201 0 0 201 0 201 201" className="bg"></polygon> 
                    <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" className="plus">
                    </path>
                  </svg> 
                  <div className="stp_icon">
                    <img src={thermalInfrared} alt="" className="stp_icon_svg" />
                  </div> 
                  <div className="stp_title">Thermal infrared</div>
                </div>
              </div> 
              <div className="stp_grid__cell ui_fadein">
                <div className="stp_item">
                  <svg width="201" height="201" viewBox="0 0 201 201" className="tab-expand">
                    <polygon points="201 201 0 0 201 0 201 201" className="bg"></polygon> 
                    <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" className="plus">
                    </path>
                  </svg>
                  <div className="stp_icon">
                    <img src={radar} alt="" className="stp_icon_svg" />
                  </div> 
                  <div className="stp_title">Radar</div>
                </div>
              </div> 
              <div className="stp_grid__cell ui_fadein">
                <div className="stp_item">
                  <svg width="201" height="201" viewBox="0 0 201 201" className="tab-expand">
                    <polygon points="201 201 0 0 201 0 201 201" className="bg"></polygon> 
                    <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" className="plus">
                    </path>
                  </svg> 
                  <div className="stp_icon">
                    <img src={visual} alt="" className="stp_icon_svg" />
                  </div> 
                  <div className="stp_title">Visual</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page3;