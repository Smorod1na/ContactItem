import React, { Fragment } from "react";
import ContactItem from "../ContactItem";

const GroupsPanel=({DataContact,Groups,changeFavorite,removeContact,editContact,changeGroup})=>{
    let contact;
    let groups
     groups=Groups.map(item=>{
       contact =DataContact.map(item2=>{
            if(item2.group==item.name)
            {
                return <ContactItem
                id={item2.id}
                name={item2.name}
                phone={item2.phone}
                address={item2.address}
                email={item2.email}
                gender={item2.gender}
                avatar={item2.avatar}
                isFavorite={item2.isFavorite}
                group={item2.group}
        changeFavorite={()=>changeFavorite(item2.id)}
        removeContact={()=>removeContact(item2.id)}
        editContact={()=>editContact(item2.id)}
        Groups={Groups}
        changeGroup={changeGroup}
                ></ContactItem>
            } })
        return <Fragment><div>{item.name}</div>
       < div className="card-deck">
{contact}      
</div> </Fragment>
    })
  for(let i=0;i<Groups.length;i++)
  {
     return <div>{groups}</div>
  }

}
export default GroupsPanel;