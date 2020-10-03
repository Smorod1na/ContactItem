import React, { Component, Fragment } from "react"
import GroupsItem from "../GroupsList/GroupItem/GroupItem";
import { Redirect } from "react-router-dom";

let value="No group";
class RemoveGroup extends Component{
state={
    isSended:false
}
    removeGroup=(event)=>{
event.preventDefault();
this.props.removeGroup(value);
this.setState({
    isSended:true
})
    }
    testFunc=(event)=>{
        value=event.target.value
    }
    render(){
        if(this.state.isSended==true)
        return (<Redirect to="/"></Redirect>)
        let groupp=this.props.Groups.map(item=>{
            return (
                <GroupsItem
                group={item.name}
                Contactgroup={null}
               >
                
          
      </GroupsItem>
      )}
      )
                                            
    return (
        <Fragment>
            
                <select onChange={this.testFunc.bind(this)} class="form-control">
    {groupp}
    </select> 
    <button class="btn btn-primary" type="button" 
      onClick={this.removeGroup.bind(this)}>Remove group</button>
    </Fragment>
     )
    }
}
export default RemoveGroup;