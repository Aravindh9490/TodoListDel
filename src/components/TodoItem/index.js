import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  delete = () => {
    const {uniqueKey, ondelete} = this.props
    return ondelete(uniqueKey)
  }

  render() {
    const {title} = this.props

    return (
      <li className="title">
        <p>{title}</p>
        <div>
          <button onClick={this.delete} type="button" className="btn">
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
