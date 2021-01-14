import React, { useState, useEffect } from 'react';

import logoLight from '../../img/logo/saab_logo_light.svg';
import logoDark from '../../img/logo/saab_logo_dark.svg';
import aircrew from '../../img/containers/thumbnails/aircrew_equipment_maintenance_shadow_thumb.png';
import maintenanceSupport from '../../img/containers/thumbnails/maintenance_support_shadow_thumb.png';
import pilotLocker from '../../img/containers/thumbnails/pilot_locker_room_flipped_shadow_thumb.png';
import missionSupport from '../../img/containers/thumbnails/mission_support_shadow_thumb.png';
import consumables from '../../img/containers/thumbnails/consumables_and_dangerous_goods_shadow_thumb.png';
import groundSupport from '../../img/containers/thumbnails/ground_support_equipment_shadow_thumb.png';
import weapon from '../../img/containers/thumbnails/weapon_maintenance_shadow_thumb.png';
import ejection from '../../img/containers/thumbnails/ejection_seat_maintenance_shadow_thumb.png';
import spares from '../../img/containers/thumbnails/spares_and_storage_shadow_thumb.png';
import wheel from '../../img/containers/thumbnails/wheel_and_brake_maintenance_shadow_thumb.png';

const Page2 = () => {

  useEffect(() => {
    
  }, [])

  return (
    <div id="page_2" className="page active">
      <div class="sidebar">
        <div class="saab_logo">
        <img src={logoLight} alt="SAAB Logo" className="active"/> 
        <img src={logoDark} alt="SAAB Logo" className="" />
        </div> 
        <div class="sidebar_textbox">
          <div class="sidebar_textbox__header">
            <span class="sidebar_textbox__title">Maintenance Containers</span>
          </div> 
          <div class="sidebar_textbox__main">
            <div class="sidebar_textbox__body">
              <p class="sidebar_textbox__paragraph">
                The maintenance container system provides workshop capacity equal to the main base in mobile format.
              </p> 
              <p class="sidebar_textbox__subtitle">Flexibility</p> 
              <p class="sidebar_textbox__paragraph">
                <ul>
                  <li>A scalable and modular system, offering various types of services</li> <li>Enhanced workshop capacity</li> 
                  <li>
                    Interior container furnishing can be adapted as required by the customer
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div> 
        <div class="sidebar_footer">
          <a href="https://www.saab.com/dam" target="_blank">saab.com/dam</a>
        </div>
      </div> 
      <div class="scene_wrap">
        <div class="scene_wrap__inner">
          <div class="container_menu">
            <div class="container_menu__grid">
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={aircrew} alt="" />
                    </div> 
                    <div class="container_menu_title">
											Aircrew equipment maintenance
										</div>
                  </div>
                </div>
              </div> 
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={maintenanceSupport} alt="" />
                    </div> 
                    <div class="container_menu_title">
											Maintenance support
										</div>
                  </div>
                </div>
              </div> 
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={pilotLocker} alt=""  />
                    </div> 
                    <div class="container_menu_title">Pilot locker room</div>
                  </div>
                </div>
              </div> 
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={missionSupport} alt="" />
                    </div> 
                    <div class="container_menu_title">Mission support</div>
                  </div>
                </div>
              </div> 
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={consumables} alt="" />
                    </div> 
                    <div class="container_menu_title">Consumables and dangerous goods</div>
                  </div>
                </div>
              </div> 
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={groundSupport} alt="" />
                    </div> 
                    <div class="container_menu_title">Ground support equipmen</div>
                  </div>
                </div>
              </div> 
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={weapon} alt="" />
                    </div> 
                    <div class="container_menu_title">Weapon maintenance</div>
                  </div>
                </div>
              </div> 
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={ejection} alt="" />
                    </div> 
                    <div class="container_menu_title">Ejection seat maintenance</div>
                  </div>
                </div>
              </div> 
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={spares} alt="" />
                    </div> 
                    <div class="container_menu_title">Spares and storage</div>
                  </div>
                </div>
              </div> 
              <div class="container_menu__cell ui_fadein">
                <div class="container_menu__item_outer">
                  <div class="container_menu__item">
                    <svg width="201" height="201" viewBox="0 0 201 201" class="tab-expand">
                      <polygon points="201 201 0 0 201 0 201 201" class="bg"></polygon> 
                      <path d="M165.71,61.72H145.14V82.29h-6.86V61.72H117.71V54.86h20.57V34.29h6.86V54.86h20.57Z" class="plus">
                      </path>
                    </svg> 
                    <div class="container_menu__image_wrap">
                      <img src={wheel} alt="" />
                    </div> 
                    <div class="container_menu_title">Wheel and brake maintenance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2;