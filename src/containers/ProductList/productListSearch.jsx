import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai'

const ProductListSearch = ({
    products,
    handleGetProductsFiltered
}) => {
    const handleSearchProduct = (e) => {
        const { value } = e.target

        let productsFiltered = products.filter(product => {

            let modelLowercase = product.model.toLowerCase()
            let brandLowercase = product.brand.toLowerCase()
            let valueLowercase = value.toLowerCase()

            return modelLowercase.includes(valueLowercase) || brandLowercase.includes(value)
        })

        handleGetProductsFiltered(productsFiltered)
    }

    return (
        <div className='search'>
            <input
                type="text"
                placeholder='Busca tu producto por marca o modelo'
                onChange={handleSearchProduct}
            />

            <AiOutlineSearch className='react-icons' />
        </div>
    )
}

ProductListSearch.propTypes = {
    products: PropTypes.array,
    handleGetProductsFiltered: PropTypes.func
}

export default ProductListSearch
