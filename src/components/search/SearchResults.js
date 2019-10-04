import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class SearchResults extends Component
{

    state = {
        animals:[],
        employees:[],
        locations:[],
        owners:[]
    };

    componentDidMount(){

    }

    render(){
        return(
            <>
                <p>I'm here and the search field is {this.props.match.params.searchKeyWord}</p>
            </>
        )
    }

}
export default SearchResults