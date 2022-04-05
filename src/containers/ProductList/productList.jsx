import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard/productCard'
import { getProducts } from '../../store/modules/Product/actions'
import './productList.css'
import ProductListSearch from './productListSearch'

const baseClass = "product-list"

const ProductList = () => {
    const [productsFiltered, setProductsFiltered] = useState([])
    const dispatch = useDispatch()

    const products = useSelector((state) => state.Product.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    // Set products on productsFiltered on first load
    useEffect(() => {
        setProductsFiltered(products)
    }, [products])

    return (
        <div className={baseClass}>
            <div className={`${baseClass}__head`}>
                <ProductListSearch
                    products={products}
                    handleGetProductsFiltered={(data) => setProductsFiltered(data)}
                />
            </div>
            <div className={`${baseClass}__container`}>
                {productsFiltered?.map((product, index) => {
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
