import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {finalTodosList: initialTodosList}

  ondelete = uniqueKey => {
    const {finalTodosList} = this.state
    const result = finalTodosList.filter(each => each.id !== uniqueKey)
    this.setState({finalTodosList: result})
  }

  render() {
    const {finalTodosList} = this.state
    return (
      <div className="bg1">
        <div className="bg2">
          <h1>Simple Todos</h1>
          <ul>
            {finalTodosList.map(eachTodo => (
              <TodoItem
                title={eachTodo.title}
                uniqueKey={eachTodo.id}
                ondelete={this.ondelete}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
