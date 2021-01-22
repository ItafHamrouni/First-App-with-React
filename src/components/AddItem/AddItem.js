import React, { Component } from 'react';
import './AddItem.css'
class  AddItem extends Component {
   state ={
     name : '',
     age : '',
     mail : ''
   }

   handleChange = (e) =>{
     this.setState({
      [e.target.id] : e.target.value
     })
     }
     handleSubmit = (e) =>{
       e.preventDefault();
       if(e.target.name.value===''){
         return false
       } else 
       this.props.addItem(this.state)
       this.setState({
          name : '',
          age : '',
          mail : ''
       })
     }
  render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
      <input type="texte" placeholder="Enter name..."  id="name" onChange={this.handleChange} value={this.state.name}/>
      <input type="number" placeholder="Enter age..."  id="age" onChange={this.handleChange} value={this.state.age}/>
      <input type="text" placeholder="Enter mail..."  id="mail" onChange={this.handleChange} value={this.state.mail}/>
      <input type="submit" value="Add" />
      </form>
    </div>
  );
}
}

export default AddItem;
