import React from 'react'
import { Phone,Video,User,ShoppingCart} from 'lucide-react'
import '../style/navbars.css'

function Nav1() {

    return (
        <div className="nav1">
         
           <ul>
           <Phone/>   <li>1800 425 3307</li>
           <Video/>  <li>Video Call</li>
           </ul>
           <ul>
             <li><User/></li>
             <li><ShoppingCart/></li>
           </ul>
        
        </div>
       );
  
}

export default Nav1