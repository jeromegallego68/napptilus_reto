import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { CURRENCY } from '../../constants'
import { addProductToCart } from '../../store/modules/Cart/actions'
import { getProductDetails } from '../../store/modules/Product/actions'
import './productDetails.css'

const baseClass = "product-details"

const ProductDetails = () => {
    const [state, setState] = useState({})
    const dispatch = useDispatch()
    const { productID } = useParams()

    const productDetails = useSelector((state) => state.Product.product_details)

    const {
        imgUrl,
        brand,
        model,
        price,
        cpu,
        ram,
        os,
        displayResolution,
        battery,
        primaryCamera,
        secondaryCmera,
        dimentions,
        weight,
        options
    } = productDetails

    useEffect(() => {
        dispatch(getProductDetails({ productID }))
    }, [])

    useEffect(() => {
        // If only one option then select it by default
        if (options?.colors.length === 1) {
            setState({
                ...state,
                colors: options.colors[0].code
            })
        }

        if (options?.storages.length === 1) {
            setState({
                ...state,
                storages: options.storages[0].code
            })
        }
    }, [options])

    const handleValueChange = (e) => {
        const { name, value } = e.target

        setState({
            ...state,
            [name]: Number(value)
        })
    }

    const submitForm = (e) => {
        e.preventDefault();

        dispatch(addProductToCart({
            id: productID,
            colorCode: state.colors,
            storageCode: state.storages
        }))
    }

    return (
        <div className={baseClass}>
            <div className='image'>
                <img src={imgUrl} alt="product image" />
            </div>
            <div className='content'>
                <NavLink to="/">Ver la lista de productos</NavLink>
                <div className='description'>
                    <div className='attributes'>
                        <label>Marca</label> <div className='value'>{brand}</div>
                    </div>
                    <div className='attributes'>
                        <label>Modelo</label> <div className='value'>{model}</div>
                    </div>
                    <div className='attributes'>
                        <label>Precio</label> <div className='value'>{`${price} ${CURRENCY}`}</div>
                    </div>
                    <div className='attributes'>
                        <label>CPU</label> <div className='value'>{cpu}</div>
                    </div>
                    <div className='attributes'>
                        <label>RAM</label> <div className='value'>{ram}</div>
                    </div>
                    <div className='attributes'>
                        <label>Sistema Operativo</label> <div className='value'>{os}</div>
                    </div>
                    <div className='attributes'>
                        <label>Resolucion de pantalla</label> <div className='value'>{displayResolution}</div>
                    </div>
                    <div className='attributes'>
                        <label>Bateria</label> <div className='value'>{battery}</div>
                    </div>
                    <div className='attributes'>
                        <label>Camaras</label> <div className='value'>{primaryCamera}{secondaryCmera}</div>
                    </div>
                    <div className='attributes'>
                        <label>Dimensiones</label> <div className='value'>{dimentions}</div>
                    </div>
                    <div className='attributes'>
                        <label>Peso</label> <div className='value'>{weight}</div>
                    </div>
                </div>
                <div className='actions'>
                    <form onSubmit={submitForm}>
                        <select
                            name="colors"
                            value={state.colors}
                            onChange={handleValueChange}
                        >
                            <option value="">Por favor, elija una opción</option>
                            {options?.colors.map((color, index) => {
                                return <option
                                    key={`color_${index}`}
                                    value={color.code}
                                >
                                    {color.name}
                                </option>
                            })}
                        </select>
                        <select
                            name="storages"
                            value={state.storages}
                            onChange={handleValueChange}
                        >
                            <option value="">Por favor, elija una opción</option>
                            {options?.storages.map((color, index) => {
                                return <option
                                    key={`color_${index}`}
                                    value={color.code}
                                >
                                    {color.name}
                                </option>
                            })}
                        </select>
                        <button disabled={!state.colors || !state.storages} type='submit'>Añadir</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
