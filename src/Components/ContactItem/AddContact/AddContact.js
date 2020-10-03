
import React, {Fragment,Component}from "react";
import { Redirect } from "react-router-dom";
class AddContact extends Component{

state={
    id:null,
    name:null,
    phone:null,
    email:null,
    address:null,
    gender:null,
    avatar:Math.floor(Math.random()*Math.floor(99)),
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
                testaddContact(event){
                  event.preventDefault();
                  const {name,address,phone,email,gender}=this.state;
                  this.props.addContact(name,address,phone,email,gender)
                    // this.props.addContact(this.state.name,this.state.address,this.state.phone
                    //     ,this.state.email,this.state.gender);
                    this.setState({
                        isSended:true
                    })
                }
    render(){
        if(this.state.isSended==true)
        return (<Redirect to="/"></Redirect>)
        return(
            <Fragment>
                I`m AddContact<br></br>
                <form>
                <lable name="lable" for="UserName">User Name:</lable>
                <input type="text" id="UsernName" onChange={this.setNametoState.bind(this)}></input>
        <p>{this.state.name}</p>

        <lable name="lable" for="UserPhone">User Phone:</lable>
                <input type="text" id="UserPhone" onChange={this.setPhonetoState.bind(this)}></input>
        <p>{this.state.phone}</p>

        <lable name="lable" for="UserEmail">User Email:</lable>
                <input type="text" id="UserEmail" onChange={this.setEmailtoState.bind(this)}></input>
        <p>{this.state.email}</p>

        <lable name="lable" for="UserAddress">User Address:</lable>
                <input type="text" id="UserAddress" onChange={this.setAddresstoState.bind(this)}></input>
        <p>{this.state.address}</p>

        <label for="UserGender">Gender</label>
      <select class="custom-select" id="UseGender" onChange={this.setGendertoState.bind(this)}>
        <option selected disabled value="">Choose...</option>
        <option>men</option>
        <option>women</option>
      </select>
      <p>{this.state.gender}</p>
      <button class="btn btn-primary" type="button" 
      onClick={this.testaddContact.bind(this)}>Add user</button>
      </form>
            </Fragment>
        )
    }
};
export default AddContact;