import React, { Fragment } from "react";
import ContactItem from "../ContactItem";

const FavoriteItem=({DataContact,Groups,changeFavorite,removeContact,editContact,changeGroup})=>{

    let contact;
    if(DataContact!=null)
    {
        contact=DataContact.map(item=>{ if(item.isFavorite==true)
            {   return(
                <ContactItem
                id={item.id}
                name={item.name}
                phone={item.phone}
                address={item.address}
                email={item.email}
                gender={item.gender}
                avatar={item.avatar}
                isFavorite={item.isFavorite}
                group={item.group}
        changeFavorite={()=>changeFavorite(item.id)}
        removeContact={()=>removeContact(item.id)}
        editContact={()=>editContact(item.id)}
        Groups={Groups}
        changeGroup={changeGroup}
                ></ContactItem>
                );}}
        );
    }
    
        return (
           <Fragment>
               <div className="card-deck">
    {contact}      
    </div> 
     </Fragment>
        )
    }
    export default FavoriteItem;