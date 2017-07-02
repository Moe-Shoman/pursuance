import React, { Component } from 'react'
import { connect } from 'react-redux'

class SaveTaskForm extends Component {
  render(){
    return (
      <form className="form form-horizontal" onSubmit={this.props.onSaveTask}>

        <div className="form-group row col-sm-3">
          <label>Title</label>
          <input className="form-control" type="text" placeholder="" onChange={this.props.onChange.bind(this, 'title')} />
        </div>

        <div className="form-group row col-sm-3">
          <label>Description</label>
          <input className="form-control" type="text" placeholder="(optional)" onChange={this.props.onChange.bind(this, 'description')} />
        </div>

        <div className="form-group row col-sm-2">
          <label>Assignee</label>
          <input className="form-control" type="text" placeholder="(optional)" onChange={this.props.onChange.bind(this, 'assignee')} />
        </div>

        {/*<div className="form-group row col-sm-3">
          <label>Skills</label>
          <input className="form-control" type="text" placeholder="(optional)" onChange={this.props.onChange.bind(this, 'skills')} />
        </div>
        */}

        <input type="submit" value="Save Task" />
      </form>
    )
  }
}

export default connect()(SaveTaskForm)
