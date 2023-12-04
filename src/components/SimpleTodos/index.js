import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'
import AddTodo from '../AddTodo'

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

  addNewTodo = text => {
    const {finalTodosList} = this.state

    this.setState(prev => ({
      finalTodosList: [
        {id: finalTodosList.length + 1, title: text},
        ...prev.finalTodosList,
      ],
    }))
  }

  editedTodo = (id, newText) => {
    const {finalTodosList} = this.state

    const modifiedList = finalTodosList.map(each =>
      each.id === id ? {...each, title: newText} : each,
    )

    this.setState({finalTodosList: modifiedList})
  }

  render() {
    const {finalTodosList} = this.state
    return (
      <div className="bg1">
        <div className="bg2">
          <h1>Simple Todos</h1>
          <div>
            <AddTodo adding={this.addNewTodo} />
          </div>
          <ul>
            {finalTodosList.map(eachTodo => (
              <TodoItem
                title={eachTodo.title}
                uniqueKey={eachTodo.id}
                ondelete={this.ondelete}
                editedTodo={this.editedTodo}
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
