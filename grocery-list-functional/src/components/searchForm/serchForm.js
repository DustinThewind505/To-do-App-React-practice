// ============ IMPORTS ============
import React, { useState } from 'react';



function SearchForm(props) {
    // ============ STATE ============
    const [formData, setFormData] = useState({
        textInput: ""
    })

    // ============ FUNCTIONS ============
    const handleSubmit = e => {
        e.preventDefault();

        props.addNewItem(formData.textInput)

        setFormData({
            textInput: ""
        })
    }

    const handlechange = e => {
        const newFormState = {
            textInput: e.target.value
        }

        setFormData(newFormState)
    }


    // ============ COMPONENT ============
    return(
        <form onSubmit={handleSubmit}>
            <input value={formData.textInput} onChange={handlechange} />
        </form>
    )
}

export default SearchForm;