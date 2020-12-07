import React from 'react';



export default class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchInput: ""
        }
    }


    render() {
        console.log(this.props)
        return(
            <form onSubmit={this.props.handleSubmit}>
                <lable>
                    <input type='search' />
                </lable>
            </form>
        )
    }
}
