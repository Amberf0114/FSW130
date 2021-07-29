import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return(
        <nav className='navbar'>
            <ul className='links'>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/sfood'>Super Foods</Link></li>
               <li><Link to='/caution'>Do NOT Click</Link></li>
            </ul>
        </nav>
    )
}

export default Nav