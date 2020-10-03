import React, { Component, Fragment } from "react"

class SearchContact extends Component{

    search=(event)=>{
event.preventDefault();
this.props.searchContacts(event.target.value);
    }
    render(){
        return(
        <Fragment>
        <input class="form-control mr-sm-2" onChange={this.search.bind(this)} type="search" placeholder="Search" aria-label="Search"></input>
        </Fragment>
        )
    }
}
export default SearchContact;