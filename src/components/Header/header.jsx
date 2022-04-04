import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import LOGO from '../../assets/logo.png'
import { FiShoppingCart } from 'react-icons/fi';

import './header.css'

const Header = () => {
    const cart = useSelector((state) => state.Cart.cart)
    const breadcrumbs = useBreadcrumbs();
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
                    {cart?.count > 0 && <div className='cart-count'>{cart?.count}</div>}
                </div>
            </div>
            <div className='breadcrumbs'>
                {breadcrumbs.length > 1 && breadcrumbs.map(({
                    match,
                    breadcrumb
                }) => (
                    <span key={match.pathname}>
                        <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                    </span>
                ))}
            </div>
        </header>
    )
}

export default Header
