import React, { Component } from 'react'

import Header from './components/Header.js'
import SaveTaskForm from './components/SaveTaskForm.js'

import store from './store.js'

class TaskApp extends Component {
  constructor(props){
    super(props)

    this.onSaveTask = this.onSaveTask.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSaveTask(event){
    event.preventDefault()
    console.log(event.target);

    // FIXME: This doesn't add a new task, but should
    store.dispatch({
      type: 'ADD_TASK',
      ...event.target,
    })
  }

  // TODO: Remove this method
  onChange(fieldName, event){
    console.log("Change:", fieldName, event.target.value)
  }

  render() {
    return (
      <div className="App" style={{textAlign: 'center'}}>
        <Header />

        <div className="App-contents" style={{textAlign: 'left',
                                              display: 'flex',
                                              flexDirection: 'column',
                                              justifyContent: 'flex-start'}}>
          <SaveTaskForm
            onChange={this.onChange}
            onSaveTask={this.onSaveTask} />
        </div>
      </div>
    )
  }
}

export default TaskApp
