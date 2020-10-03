import React, {Component, Fragment } from "react";

import GroupsItem from "./GroupItem/GroupItem";

// const GroupsList=({Groups,Contactgroup,changeGroup})=>
class GroupsList extends Component{
    testFunc=(event)=>{
        this.props.changeGroup(this.props.id,event.target.value)
    }
    render(){
    let groupp=this.props.Groups.map(item=>{
        return (
            <GroupsItem
            group={item.name}
            Contactgroup={this.props.Contactgroup}
           >
            
      
  </GroupsItem>
  )}
  )
                                        
return (
    <Fragment>
        
            <select onChange={this.testFunc.bind(this)} class="form-control">
{groupp}
</select> 

</Fragment>
 )
}
}
export default GroupsList;