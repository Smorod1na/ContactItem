import { render } from "@testing-library/react";
import React, { Component,Fragment } from "react";
import { Redirect } from "react-router-dom";
let newgroup;
class AddGroup extends Component{
    state={
        isSended:false
    }
    setGroup(event){
        newgroup=event.target.value
    }
   addnewGroup(){
    this.props.addGroup(newgroup)
    this.setState({
        isSended:true
    })
   };
   render(){
    if(this.state.isSended==true)
    return (<Redirect to="/"></Redirect>)
    return(
        <Fragment>
            <form>
    <lable name="lable" for="UserPhone">New Group:</lable>
    <input type="text" id="UserPhone" onChange={this.setGroup.bind(this)}></input>

<button class="btn btn-primary" type="button" 
      onClick={this.addnewGroup.bind(this)}>Add group</button>
      </form>
</Fragment>)}
}
export default AddGroup;