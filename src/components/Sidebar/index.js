import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/Mazigh.png'


const Sidebar = () =>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />

        </Link>
        <nav>
            <NavLink exact to="/" className="nav-button">
                Home
            </NavLink>
            <NavLink exact to="/portfolio" className="nav-button about-link">
                Portfolio
            </NavLink>
          
            <NavLink exact to="/contact" className="nav-button contact-link">
                Contact
            </NavLink>
           
            
        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/mazigh-djillali-76b4a71a5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BaWgbF2mcR%2FOoAVanYNaVIA%3D%3D'>
                </a>
            </li>
           
        </ul>
    </div>

)

export default Sidebar