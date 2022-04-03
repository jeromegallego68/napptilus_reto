import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './productCard.css'

const baseClass = 'product-card'

const ProductCard = (
    data
) => {
    const navigate = useNavigate();
    const { id, brand, imgUrl, model, price } = data
    const currency = "€"


    return (
        <div className={baseClass} onClick={() => navigate(`/product/${id}`)}>
            <div className='image' style={{
                backgroundImage: `url("${imgUrl}")`
            }}>
            </div>
            <div className='content'>
                <div className='infos'>
                    <div className='brand'>
                        {brand}
                    </div>
                    <div className='model'>
                        {model}
                    </div>
                </div>
                <div className='price'>
                    {`${price} ${price ? currency : ''}`}
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.string,
    brand: PropTypes.string,
    imgUrl: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.string
}

export default ProductCard
