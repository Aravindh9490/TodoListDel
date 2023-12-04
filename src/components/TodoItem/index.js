import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {edit: false, checked: false}

  delete = () => {
    const {uniqueKey, ondelete} = this.props
    return ondelete(uniqueKey)
  }

  onclickEdit = () => {
    this.setState(prev => ({
      edit: !prev.edit,
    }))
  }

  handleToggleCheck = () => {
    this.setState(prev => ({checked: !prev.checked}))
  }

  onEditedTitle = e => {
    const {uniqueKey, editedTodo} = this.props

    return editedTodo(uniqueKey, e.target.value)
  }

  render() {
    const {edit, checked} = this.state
    const {title} = this.props

    return (
      <li className="title">
        <div className="checkboxView">
          <input
            onChange={this.handleToggleCheck}
            className="checkbox"
            type="checkbox"
            checked={checked}
          />
          {edit ? (
            <input
              className="input"
              type="text"
              value={title}
              onChange={this.onEditedTitle}
            />
          ) : (
            <p className={`title ${checked ? 'lineOnText' : null}`}>{title}</p>
          )}
        </div>

        <div>
          <button onClick={this.onclickEdit} className="btn edit" type="button">
            {edit ? 'Save' : 'Edit'}
          </button>
          <button onClick={this.delete} type="button" className="btn">
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
