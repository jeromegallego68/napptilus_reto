import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const HeaderMenuMobile = ({
    cart
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false)
        }
    }, [location.pathname]);
    return (
        <div className='menu mobile'>
            <AiOutlineMenu className='react-icons mobile-button' onClick={() => setIsOpen(true)} />

            <div className={`mobile-pannel ${isOpen ? 'open' : ''}`}>
                <div className='mobile-pannel__actions'>
                    <div className='cart'>
                        <FiShoppingCart className='react-icons' />
                        {cart?.count > 0 && <div className='cart-count'>{cart?.count}</div>}
                    </div>
                    <AiOutlineCloseCircle className='react-icons close-button' onClick={() => setIsOpen(false)} />
                </div>
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
            </div>
        </div>
    )
}

HeaderMenuMobile.propTypes = {
    cart: PropTypes.object
}

export default HeaderMenuMobile
