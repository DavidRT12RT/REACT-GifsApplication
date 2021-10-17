import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories,categories}) => {
    const [inputValue, setinputValue] = useState("");

    const handleInputChange=(e)=>{
        setinputValue(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2 && !categories.includes(inputValue)){
            setcategories(cats=>[inputValue,...cats]);
        }
        setinputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
//Proptypes
AddCategory.propTypes={
    setcategories:PropTypes.func.isRequired,
    categories:PropTypes.array.isRequired
}