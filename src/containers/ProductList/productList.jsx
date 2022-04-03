import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard/productCard'
import { getProducts } from '../../store/modules/Product/actions'
import './productList.css'

const baseClass = "product-list"

const ProductList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const products = useSelector((state) => state.Product.products)

    return (
        <div className={baseClass}>
            {products.map((product, index) => {
                return <ProductCard
                    {...product}
                    key={`product_${index}`}
                />
            })}
        </div>
    )
}

export default ProductList
