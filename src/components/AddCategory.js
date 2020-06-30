import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInpuChange = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubtmit = (e) => {
        e.preventDefault();
            if (inputValue.trim().length > 2){
            setCategorias(categorias => [inputValue,...categorias]);
            setInputValue('');    
        }
    }
    return (
		    <form onSubmit={handleSubtmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInpuChange} />
                    {/*para que registre el cambio insertado en el input*/}
			</form>
		);
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired,
};