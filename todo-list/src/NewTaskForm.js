import React,{Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

class NewTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = { task: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
   evt.preventDefault();
   const NewTask = {...this.state , id : uuidv4() , completed : false}
   this.props.addTodo(NewTask);
   this.setState({ task: "" })
  }

  handleChange(evt){
   this.setState({ [evt.target.name]: [evt.target.value] })
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
       <label htmlFor = "task">New Todo</label>
       <input 
         type="text"
         id="task"
         name="task"
         value={this.state.task}
         placeholder="Add a new todo"
         onChange={this.handleChange}
        />
        <button>ADD TODO</button>
      </form>
    )
  }
}

export default NewTaskForm;