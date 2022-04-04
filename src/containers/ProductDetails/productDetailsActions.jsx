import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const ProductDetailsActions = ({
    options,
    handleSubmitForm
}) => {
    const [state, setState] = useState({})

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

        handleSubmitForm({
            colorCode: state.colors,
            storageCode: state.storages
        })
    }

    return (
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
    )
}

ProductDetailsActions.propTypes = {
    options: PropTypes.object,
    handleSubmitForm: PropTypes.func
}

export default ProductDetailsActions
