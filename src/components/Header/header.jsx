import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LOGO from '../../assets/logo.png'
import Breadcrumbs from '../Breadcrumbs/breadcrumbs';
import useIsMobile from '../../hooks/useIsMobile';
import HeaderMenuDesktop from './headerMenuDesktop';
import HeaderMenuMobile from './headerMenuMobile';

import './header.css'

const Header = () => {
    const cart = useSelector((state) => state.Cart.cart)
    const isMobile = useIsMobile();

    return (
        <header id='header'>
            <div className='logo'>
                <NavLink to={"/"}>
                    <img src={LOGO} alt="logo" />
                </NavLink>
            </div>

            {isMobile ? <HeaderMenuMobile cart={cart} /> : <HeaderMenuDesktop cart={cart} />}

            <Breadcrumbs />
        </header>
    )
}

export default Header
