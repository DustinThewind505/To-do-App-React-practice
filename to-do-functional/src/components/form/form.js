// ============ IMPORTS ============
import React, { useState } from 'react';



function Form(props) {
    // ============ STATE ============
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    })


    // ============ FUNCTIONS ============
    const handleChange = e => {
        const newFormState = {
            ...formData,
            [e.target.name]: e.target.value
        }

        setFormData(newFormState)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.addNewNote(formData.title, formData.body)

        setFormData({
            title: "",
            body: ""
        })
    }



    // ============ COMPONENT ============
    return(
        <form onSubmit={handleSubmit}>
            <label>Title
                <input name='title' value={formData.title} onChange={handleChange} />
            </label>
            <label>Body
                <textarea name='body' value={formData.body} onChange={handleChange} required/>
            </label>
            <button type='submit'>Add Note</button>
        </form>
    )
}

export default Form;