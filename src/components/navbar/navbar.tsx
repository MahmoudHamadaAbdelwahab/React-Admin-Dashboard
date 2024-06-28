 import {Scan} from 'phosphor-react';
 import {Airplay} from 'phosphor-react';
 import {CornersOut} from 'phosphor-react';
 import {Gear} from 'phosphor-react';
 import {Bell} from 'phosphor-react';
 import mahmoud from './../../img/mahmoud.png'
 import logo from './../../img/logo.svg'
 import './navbar.scss'
 const NavarApp = () => {
  return (
    <div className="nav">

      <div className="logo">
        <img src={logo} alt="alt" />

        <span>Programmer admin</span>
      </div>

      <div className="icons">

        <Scan size={32} className='icon'/>

        <CornersOut size={32} className='icon'/>

        <div className='notification'>

          <Bell size={32}/>
          <span>1</span>

        </div>

        <div className='users'>
          <img src={mahmoud} style={{width:'30px',height:'30px',borderRadius:'50%'}}alt="alt" />

          <span>mahmoud</span>
        </div>

        <Airplay size={32}/>

        <Gear size={32}/>

      </div>
    </div>
  )
}
export default NavarApp
