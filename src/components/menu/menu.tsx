  // this is menu he is when click in button in user , profile => go to in the page  
import { Link } from 'react-router-dom'
import './menu.scss'

import {menu} from './../../data';

 const MenuApp = () => {
  return (
    <div className="menu">
       {menu.map((e)=> (

        <div className="item" key={e.id}>
          <span className="title">{e.title}</span>
          {
            e.listItems.map((item)=> (
          <Link to={item.url} className='link'>
              <img src={item.icon} />
              <span className="listItemTitle">{item.title}</span>
           </Link>

            ))
          }

        </div>
      ))}
    </div>
  )
}
export default MenuApp
