import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard/productCard'
import { getProducts } from '../../store/modules/Product/actions'
import { AiOutlineSearch } from 'react-icons/ai'
import './productList.css'

const baseClass = "product-list"

const ProductList = () => {
    const dispatch = useDispatch()
    const [productsFiltered, setProductsFiltered] = useState([])

    const products = useSelector((state) => state.Product.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    useEffect(() => {
        setProductsFiltered(products)
    }, [products])

    const handleSearchProduct = (e) => {
        const { value } = e.target

        let productsFiltered = products.filter(product => {

            let modelLowercase = product.model.toLowerCase()
            let brandLowercase = product.brand.toLowerCase()
            let valueLowercase = value.toLowerCase()

            return modelLowercase.includes(valueLowercase) || brandLowercase.includes(value)
        })
        setProductsFiltered(productsFiltered)
    }

    return (
        <div className={baseClass}>
            <div className={`${baseClass}__head`}>
                <div className='search'>
                    <input
                        type="text"
                        placeholder='Busca tu producto por marca o modelo'
                        onChange={handleSearchProduct}
                    />

                    <AiOutlineSearch className='react-icons' />
                </div>
            </div>
            <div className={`${baseClass}__container`}>
                {productsFiltered.map((product, index) => {
                    return <ProductCard
                        {...product}
                        key={`product_${index}`}
                    />
                })}

            </div>
        </div>
    )
}

export default ProductList
