import React,{Fragment,Component} from "react";
import "./EditContact.css";
import { Redirect } from "react-router-dom";

class EditContact extends Component{

    state={
        id:this.props.currentContact.id,
        name:this.props.currentContact.name,
        phone:this.props.currentContact.phone,
        email:this.props.currentContact.email,
        address:this.props.currentContact.address,
        gender:this.props.currentContact.gender,
        avatar:this.props.currentContact.avatar,
        isFavorite:false
    }
    setNametoState(event){
        this.setState({
            name:event.target.value
        })
        }
        setPhonetoState(event){
            this.setState({
                phone:event.target.value
            })
            }
            setEmailtoState(event){
                this.setState({
                    email:event.target.value
                })
                }
                setAddresstoState(event){
                    this.setState({
                        address:event.target.value
                    })
                    }
                    setGendertoState(event){
                        this.setState({
                            gender:event.target.value
                        })
                        }

                        sendData(event){
                            event.preventDefault();
                            const {name,address,phone,email,avatar,isFavorite,gender,id}=this.state;
                            this.props.SaveEditContact(name,address,phone,email,avatar,isFavorite,gender,id)
                            
                            this.setState({
                                isSended:true
                            })
                        }

      
      
render(){
    if(this.state.isSended==true)
    return (<Redirect to="/"></Redirect>)
    return(
        <Fragment>
            I`m EditContact<br></br>
            <lable name="lable" for="UserName">User Name:</lable>
            <input type="text" id="UsernName"value={this.state.name} onChange={this.setNametoState.bind(this)}></input>
    <p>{this.state.name}</p>

    <lable name="lable" for="UserPhone">User Phone:</lable>
            <input type="text" id="UserPhone"value={this.state.phone} onChange={this.setPhonetoState.bind(this)}></input>
    <p>{this.state.phone}</p>

    <lable name="lable" for="UserEmail">User Email:</lable>
            <input type="text" id="UserEmail"value={this.state.email} onChange={this.setEmailtoState.bind(this)}></input>
    <p>{this.state.email}</p>

    <lable name="lable" for="UserAddress">User Address:</lable>
            <input type="text" id="UserAddress"value={this.state.address} onChange={this.setAddresstoState.bind(this)}></input>
    <p>{this.state.address}</p>

    <label for="UserGender">Gender</label>
  <select class="custom-select" id="UseGender" onChange={this.setGendertoState.bind(this)}>
    <option selected disabled value="">{this.state.gender}</option>
    <option>men</option>
    <option>women</option>
  </select>
  <p>{this.state.gender}</p>
  <button class="btn btn-primary" type="button" 
  onClick={this.sendData.bind(this)}>Edit user</button>
        </Fragment>
    )
}
}
export default EditContact;