import logo from '../assets/shared/logo.svg'
import burgerOpenIcon from '../assets/shared/icon-hamburger.svg'
import burgerCloseIcon from '../assets/shared/icon-close.svg'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
const Header = () => {
    let isOpen = false;
    const location = useLocation().pathname;
    const pathName = location.slice(1,location.length);

    const showNav = () =>{
        document.querySelector('.nav-ul').classList.toggle('show');
        isOpen = !isOpen;
        document.querySelector('.burger-icon').setAttribute('src',`${isOpen === false ? burgerOpenIcon : burgerCloseIcon}`)    
    }
    return ( 
        <header>
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="line"></div>
            <div className="burger-menu">
                <img className = "burger-icon" src={burgerOpenIcon} onClick = {showNav} />
            </div>
            <nav>
            <ul className='nav-ul'>
                <li>
                    <Link to="/" 
                        style = {pathName === '' ? {borderBottom: "0.2vw solid white"} : {borderBottom: "0.2vw solid transparent"}}>
                        <span className="nums" >00</span> Home
                    </Link>
                </li>
                <li>
                    <Link to="/destination" 
                        style = {pathName === 'destination' ? {borderBottom: "0.2vw solid white"} : {borderBottom: "0.2vw solid transparent"}}>
                        <span className="nums">01</span> Destination
                    </Link>
                </li>
                <li>
                    <Link to="/crew"
                        style = {pathName === 'crew' ? {borderBottom: "0.2vw solid white"} : {borderBottom: "0.2vw solid transparent"}} >
                        <span className="nums">02</span> Crew
                    </Link></li>
                <li>
                    <Link to='/Technology' 
                        style = {pathName === 'Technology' ? {borderBottom: "0.2vw solid white"} : {borderBottom: "0.2vw solid transparent"}}>
                        <span className="nums">03</span> Technology
                    </Link>
                </li>
            </ul>
            </nav>
        </header>
    );
}
 
export default Header;