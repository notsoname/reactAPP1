/* eslint-disable react/prop-types */
import React from 'react';
import './searchPanel.css'


export default class SearchPanel extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
        this.onUpdateSeatch = this.onUpdateSeatch.bind(this);
    }

    onUpdateSeatch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSeatch(term)
    }
    render() {
        return (
            <input
                className='form-control search-input'
                type='text'
                placeholder='Поиск по записям'
                onChange={this.onUpdateSeatch}
            />
        )
    }
}

