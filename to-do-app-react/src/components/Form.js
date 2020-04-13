import React, { useState } from 'react';

const Form = () => {
    const [heading, setHeading] = useState('')

    const handleChange = event => {
        setHeading(event.target.value)
    }

    return(
        <div>
            <form>
                <input onChange={handleChange}/>
            </form>
            <h1>{heading}</h1>
        </div>
    )
}
export default Form;