import React, {Component, Fragment } from 'react';
import './App.css';
// import ContactItem from './Components/ContactItem/ContactItem';
import ContactList from './Components/ContactItem/ContactList/ContactList';
import FavoriteItem from './Components/ContactItem/FavoriteItem/FavoriteItem';
import{BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import Page404 from './Components/ContactItem/Page404/Page404';
import AddContact from './Components/ContactItem/AddContact/AddContact';
import uuid from "react-uuid";
import EditContact from './Components/ContactItem/EditContact/EditContact';
import SearchContact from'./Components/ContactItem/SearchContact/SearchContact'
import GroupsList from './Components/ContactItem/GroupsList/GroupsList'
import GroupItem from './Components/ContactItem/GroupsList/GroupItem/GroupItem'
import GroupsPanel from './Components/ContactItem/GroupPanel/GroupPanel'
import AddGroup from './Components/ContactItem/AddGroup/AddGroup'
import RemoveGroup from './Components/ContactItem/RemoveGroup/RemoveGroup'
class App extends Component {
  state = {
    List:[
      {
        id:1,
        name:"Sasha Lozovitskiy",
        phone:"0982509534",
        email:"lozovitskii1991@gmail.com",
        address:"Bukovinska street",
        gender:"men",
        avatar:25,
        isFavorite:false,
        group:"No group"
      },
      {
        id:2,
        name:"Vika Pulina",
        phone:"0982509534",
        email:"vika@gmail.com",
        address:"Bukovinska street",
        gender:"women",
        avatar:35,
        isFavorite:false,
        group:"Group1"
      },
      {
        id:3,
        name:"Vitya Poszikov",
        phone:"0982509534",
        email:"vitya@gmail.com",
        address:"Bukovinska street",
        gender:"men",
        avatar:25,
        isFavorite:true,
        group:"No group"
      }
    ],
    currentContact:null,
    allContact:[],
    Groups:[{
      name:"No group"
    },{
      name:"Group1"
    },
    {
      name:"Group2"
    }
  ,
  {
    name:"Group3"
  }
    ]
  }

URL="https://contactbook-9f583.firebaseio.com/list.json"

getContacts=()=>{
fetch(this.URL,{method:"GET"})
.then(data=>{
  return data.json();
})
.then(contacts=>{
  console.log("Test ok",contacts)
  this.setState({
    List:contacts,
    allContact:contacts
  })
})
.catch(error=>{
  console.log("Error".error)
})
}

// PRU STARTI PROEKTU
componentDidMount(){
  if(this.state.allContact.length==0)
 {const contact=this.state.List.slice()
 this.setState({
  allContact:contact
})}
  // this.getContacts();
}

async saveChanges(ListData){
  fetch(this.URL,{method:"PUT",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  body:JSON.stringify(ListData)
}).then(data=>{
  console.log(data)
}).catch(error=>{
  console.log(error)
})
}



  changeFavorite=id=>{
    const index=this.state.List.findIndex(x=>x.id==id);
    const tempList=this.state.List.slice();

    tempList[index].isFavorite=! tempList[index].isFavorite;
    this.setState(
    {
  List:tempList
    }
    )
  }
  addContact=(name,address,phone,email,gender)=>{
const newContact={
     id:uuid(),
        name:name,
        phone:phone,
        email:email,
        address:address,
        gender:gender,
        avatar:Math.floor(Math.random()*Math.floor(99)),
        isFavorite:false
};
    let tempList=[];
    if(this.state.List!=null)
   { tempList=this.state.List.slice();}
    tempList.push(newContact)
    this.saveChanges(tempList)
    this.setState({
      List:tempList
  });
  }

removeContact=(id)=>{
  const tempList2=this.state.List;
  const indexRemoveElement=tempList2.findIndex(item=>item.id===id);
  tempList2.splice(indexRemoveElement,1);

this.setState({
  List:tempList2
});
this.saveChanges(this.state.List)
}
editContact=(id)=>{
  const index=this.state.List.findIndex(item=>item.id===id);
const currentContact=this.state.List[index];
  this.setState({
    currentContact:currentContact
  })
}

searchContacts=(text)=>{
 

  if(text=="")
  // this.getContacts();
  {
    const contact3=this.state.allContact.slice()
    this.setState({
      List:contact3
    })}
  
  else
 {
  // this.getContacts()
    const contact2=this.state.allContact.filter(
    x=>{
    if(x.name.toLowerCase().includes(text))
    return x;
  })

  this.setState({
    List:contact2
  })
}
}
SaveEditContact=(name,address,phone,email,avatar,isFavorite,gender,id)=>{
  
const editedContact={
          
  id:id,
  name:name,
  phone:phone,
  email:email,
  address:address,
  gender:gender,
  avatar:avatar,
  isFavorite:isFavorite

}

const contacts=this.state.List.map((x)=>{
  if(x.id===id)
  return editedContact;
  return x;
})
this.setState({
  List:contacts
})
this.saveChanges()

}

changeGroup=(id,group)=>{
let tempList=this.state.List.map(item=>{
  if(item.id==id)
  item.group=group
  return item;
})
this.setState({
  List:tempList
})
}

addGroup=(groupName)=>{
  const newgroup={
    name:groupName
  }
let tempGroup=this.state.Groups.slice();
tempGroup.push(newgroup)
this.setState({
  Groups:tempGroup
})
}

removeGroup=(name)=>{
const newListGroup=this.state.Groups.slice();
const tempList=this.state.List.filter(item=>{
  if(item.group!=name)
  return item
});
const indexRemoveElement=newListGroup.findIndex(item=>item.name===name);
newListGroup.splice(indexRemoveElement,1);
this.setState({
  List:tempList,
  Groups:newListGroup
})
}
  render() {
    return (
      <Fragment>

        
        <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-10">
            <Link className="navbar-brand" to="/">Contact book</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">Contact list</Link>
                <Link className="nav-item nav-link" to="/favoriteContact">Favorite contact</Link>
                <Link className="nav-item nav-link" to="/addContact">Add contact</Link>
                <Link className="nav-item nav-link" to="/groups">Groups</Link>
                <Link className="nav-item nav-link" to="/addgroups">AddGroups</Link>
                <Link className="nav-item nav-link" to="/removegroups">Remove group</Link>

              </div>
              <form class="form-inline my-2 my-lg-0">
<SearchContact
searchContacts={this.searchContacts.bind(this)}>
  </SearchContact>      </form>
            </div>
          </nav>


<Switch>
      <Route path="/"
             exact
             render={()=>
              <ContactList
              DataContact={this.state.List}
              Groups={this.state.Groups}
              changeFavorite={this.changeFavorite.bind(this)}
              removeContact={this.removeContact.bind(this)}
              editContact={this.editContact.bind(this)}
              changeGroup={this.changeGroup}
              ></ContactList>
             } ></Route>

      <Route path="/favoriteContact"
      exact
      render={()=>
        <FavoriteItem
        DataContact={this.state.List}
        Groups={this.state.Groups}
        changeFavorite={this.changeFavorite.bind(this)}
        removeContact={this.removeContact.bind(this)}
        editContact={this.editContact.bind(this)}
        changeGroup={this.changeGroup}></FavoriteItem>
       }>
      </Route>

<Route path="/addContact"
      exact
      render={()=>
        <AddContact
        addContact={this.addContact.bind(this)}></AddContact>
       }>
      </Route>

<Route path="/editContact"
exact
 render={()=>
<EditContact
currentContact={this.state.currentContact}
SaveEditContact={this.SaveEditContact}
>
  
</EditContact>}>
   
</Route>

<Route path="/groups"
exact
 render={()=>
<GroupsPanel
 DataContact={this.state.List}
 Groups={this.state.Groups}
 changeFavorite={this.changeFavorite.bind(this)}
 removeContact={this.removeContact.bind(this)}
 editContact={this.editContact.bind(this)}
 changeGroup={this.changeGroup}
>
  
</GroupsPanel>}>
   
</Route>
<Route path="/addgroups"
exact
 render={()=>
<AddGroup
addGroup={this.addGroup.bind(this)}
>
  
</AddGroup>}>
   
</Route>


<Route path="/removegroups"
exact
 render={()=>
<RemoveGroup
 Groups={this.state.Groups}
 removeGroup={this.removeGroup.bind(this)}
>
  
</RemoveGroup>}>
   
</Route>
<Route path="*"
      render={()=>
        <Page404
        ></Page404>
      }y
      
></Route>


</Switch>



         
        
        
        </div>

        </Router>
      </Fragment >
    );
  }
}

export default App;
