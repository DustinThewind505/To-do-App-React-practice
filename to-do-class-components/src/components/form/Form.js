// ============ IMPORTS ============
import React from 'react';




class Form extends React.Component {
    constructor() {
        super();
        // ============ STATE ============
        this.state = {
            title: "",
            body: ""
        }
    }


    // ============ FUNCTIONS ============
    handleSubmit = e => {
        e.preventDefault();

        this.props.addNewNote(this.state)

        this.setState({
            title: "",
            body: ""
        })
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }


    // ============ COMPONENT ============
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input name='title' value={this.state.title} onChange={this.handleChange} />
                </label>
                <label>Body
                    <textarea name='body' value={this.state.body} onChange={this.handleChange} />
                </label>
                <button type='submit'>Add Note</button>
            </form>
        )
    }
}

export default Form;