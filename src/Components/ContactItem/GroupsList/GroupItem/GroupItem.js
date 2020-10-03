import React, { Fragment } from "react";
const GroupsItem=({group,Contactgroup})=>{

    if(group==Contactgroup)
    return (
      
           <option selected>{group}</option>
    )
    else
    return (
      
        <option>{group}</option>

 )

}
export default GroupsItem;