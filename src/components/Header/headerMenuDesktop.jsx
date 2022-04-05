import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const HeaderMenuDesktop = ({
    cart
}) => {
    return (
        <div className='menu desktop'>
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
    )
}

HeaderMenuDesktop.propTypes = {
    cart: PropTypes.object
}


export default HeaderMenuDesktop
