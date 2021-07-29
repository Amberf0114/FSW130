import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return(
        <nav className='navbar'>
            <ul className='links'>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/movies'>Movies</Link></li>
               <li><Link to='/tvshows'>Tv Shows</Link></li>
            </ul>
        </nav>
    )
}

export default Nav