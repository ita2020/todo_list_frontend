import React from 'react';
import './index.css'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id
    }
  }

  render() {
    return (
      <div className='todo' onClick={this.onClick}>
        <span className={this.props.status ? 'done' : ''}>{this.props.content}</span>
        <span onClick={this.delete}>x</span>
      </div>
    )
  }

  onClick = (event) => {
    this.props.changeStatus(this.state.id)
    event.stopPropagation()
  }

  delete = (event) => {
    this.props.deleteTodo(this.state.id)
    event.stopPropagation()
  }

}

export default Todo