import logoLight from '../../img/logo/saab_logo_light.svg';
import logoDark from '../../img/logo/saab_logo_dark.svg';
import logo from '../../logo.png';

const Logo = ({handleChange, isActiveTop, title}) => (
  <div className={title ? "saab_logo title" : "saab_logo"} onClick={() => handleChange('isActive0')}>
    {/* <img src={logoLight} alt="SAAB Logo" className={isActiveTop ? 'active' : ''} />  */}
    <img src={logo} alt="SAAB Logo" className={isActiveTop ? 'active' : ''} /> 
    {/* <img src={logoDark} alt="SAAB Logo" className={isActiveTop ? '' : 'active'} /> */}
  </div> 
);

export default Logo;