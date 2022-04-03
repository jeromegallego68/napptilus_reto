import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { CURRENCY } from '../../constants'
import { getProductDetails } from '../../store/modules/Product/actions'
import './productDetails.css'

const baseClass = "product-details"

const ProductDetails = () => {
    const dispatch = useDispatch()
    const { productID } = useParams()

    useEffect(() => {
        dispatch(getProductDetails({ productID }))
    }, [])

    const handleValueChange = (e) => {
        const { name, value } = e.target
        console.log(name)
        console.log(value)
    }

    const submitForm = () => {

    }

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
                        <select name="colors" onChange={handleValueChange}>
                            <option value="">--Please choose an option--</option>
                            {options?.colors.map((color, index) => {
                                return <option
                                    key={`color_${index}`}
                                    value={color.code}
                                >
                                    {color.name}
                                </option>
                            })}
                        </select>
                        <select name="storages" onChange={handleValueChange}>
                            <option value="">--Please choose an option--</option>
                            {options?.storages.map((color, index) => {
                                return <option
                                    key={`color_${index}`}
                                    value={color.code}
                                >
                                    {color.name}
                                </option>
                            })}
                        </select>
                        <button type='submit'>Añadir</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
