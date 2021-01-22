import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class  App extends Component {
state = {
items : [
   {id:1,name:'Itaf',age:26, mail:'xxx'},
   {id:2,name:'Abir',age:29, mail:'xxx'},
   {id:3,name:'Aula',age:31, mail:'xxx' }
] 
}
deleteItem = (id) =>{
  let items= this.state.items;
  let i = items.findIndex(item => item.id === id)
  items.splice(i,1)
  this.setState({items})
}

addItem = (item) =>{
  item.id = Math.random;
  let items = this.state.items;
  items.push(item);
  this.setState({items})

}
  render() {
  return (
    <div className="App container">
      <h1 className="text-center">First App with React</h1> 
      <h2 className="text-center">ToDoList</h2>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItem  addItem ={this.addItem}/>
    </div>
  );
}
}

export default App;
