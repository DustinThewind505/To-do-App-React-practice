import React, { useState } from 'react';

const Form = () => {
    const [heading, setHeading] = useState('')

    const handleChange = event => {
        setHeading(event.target.value)
    }

    return(
        <div>
            <form>
                <label>
                Title: <input onChange={handleChange}/>
                </label>
                <label>
                    Note: <textarea />
                </label>
            </form>
            <h1>{heading}</h1>
        </div>
    )
}
export default Form;