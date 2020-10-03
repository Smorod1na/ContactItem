import React, { Component, Fragment } from "react";
import "./ContactItem.css";
import {Link} from "react-router-dom"
import GroupsList from "./GroupsList/GroupsList";

class ContactItem extends Component{
    
    state={
        id:this.props.id,
        name:this.props.name,
        phone:this.props.phone,
        email:this.props.email,
        address:this.props.address,
        gender:this.props.gender,
        avatar:this.props.avatar,
        isFavorite:this.props.isFavorite,
        Contactgroup:this.props.Contactgroup,
        Groups:this.props.Groups,
        group:this.props.group
}
    
setRandomImage(){
    const randomAvatar=Math.floor(Math.random()*Math.floor(99));
    this.setState({
        avatar:randomAvatar
    });
}    

// setFavorite(){


    
//     // this.setState({
//     //     isFavorite:!this.state.isFavorite
//     // })
// }


    render(){

   const{name,email,avatar,phone,address,gender,Groups}=this.state;
   const url_Image=`https://randomuser.me/api/portraits/${gender}/${avatar}.jpg`

   let class_star="fas fa-star fa-2x icon";
if(this.props.isFavorite==false)
{
    class_star="far fa-star fa-2x icon"
}
        return(
            <Fragment>
            <div className="card">
                <img className="card-img-top" width="150" src={url_Image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{phone}</p>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{address}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-info btnMb" onClick={this.setRandomImage.bind(this)}>RANDOM IMAGE</button>
                    <i className={class_star} onClick={this.props.changeFavorite}></i>
                    <i className="fas fa-trash-alt fa-2x trash" onClick={this.props.removeContact}></i>
                <Link to="/editContact">
                <i className="fas fa-edit fa-2x edit" onClick={this.props.editContact}></i>
                </Link>
                </div>
                <div>
                <GroupsList Groups={this.props.Groups}
                Contactgroup={this.props.group}
                id={this.props.id}
                changeGroup={this.props.changeGroup}>
                    
                </GroupsList>
                </div>
            </div>
        </Fragment>
        )
    }
}

export default ContactItem;