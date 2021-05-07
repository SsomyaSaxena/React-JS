import React,{Component} from 'react';
import NewTaskForm from './NewTaskForm';
import './TodoList.css'
import Todo from './Todo';

class TodoList extends Component {
  constructor(props)
  {
    super(props);
    this.state = { todos: [] }
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  addTodo(newTodo)
  {
    this.setState({
      todos: [...this.state.todos , newTodo]
    })
  }
  remove(id)
  {
   this.setState({
     todos: this.state.todos.filter(todo => todo.id !== id)
   })
  }
  update(id,updatedTask){
    let updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id)
      {
        return {...todo , task:updatedTask};
      }
      return todo;
    })
    this.setState({
      todos : updatedTodos
    })
  }
  toggleCompleted(id)
  {
    let updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id)
      {
        return {...todo , completed: !todo.completed};
      }
      return todo;
    })
    this.setState({
      todos : updatedTodos
    })
  }
  renderItems() {
    return (
      <ul>
        {this.state.todos.map(todo => (
              <Todo task={todo.task} key={todo.id} removeTodo={this.remove} updateTodo={this.update} id={todo.id} completed={todo.completed} toggleTodo={this.toggleCompleted}/>
        ))}
      </ul>  
    );
  }
  render(){
    return (
      <div className="TodoList">
        <h1>TODO-LIST <span>A Simple React To-do List App</span></h1>
        {this.renderItems()}
        <NewTaskForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoList;