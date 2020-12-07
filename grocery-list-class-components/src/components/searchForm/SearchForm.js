import React from 'react';



class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchInput: ""
        }
    }



    handleChange = e => {
        const newFormState = e.target.value

        this.setState({
            searchInput:  newFormState
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.addNewItem(this.state.searchInput)

        this.setState({
            searchInput: ""
        })
    }




    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <lable>
                    <input value={this.state.searchInput} onChange={this.handleChange} />
                </lable>
            </form>
        )
    }
}

export default SearchForm;