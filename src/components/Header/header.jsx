import { NavLink } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

import './header.css'

import LOGO from '../../assets/logo.png'

const Header = () => {
    return (
        <header id='header'>
            <div className='logo'>
                <NavLink to={"/"}>
                    <img src={LOGO} alt="logo" />
                </NavLink>
            </div>
            <div className='menu'>
                <NavLink to={"/"}>
                    Inicio
                </NavLink>
                <NavLink to={"#"}>
                    Otra pagina 1
                </NavLink>
                <NavLink to={"#"}>
                    Otra pagina 2
                </NavLink>
                <NavLink to={"#"}>
                    Otra pagina 3
                </NavLink>
                <div className='cart'>
                    <FiShoppingCart className='react-icons' />
                </div>
            </div>
        </header>
    )
}

export default Header
