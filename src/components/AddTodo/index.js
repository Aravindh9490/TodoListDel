import {useState} from 'react'
import './index.css'

const AddTodo = props => {
  const {adding} = props
  const [inputText, setInputText] = useState('')

  const onChangeInput = e => {
    setInputText(e.target.value)
  }

  const onAdding = () => {
    adding(inputText)
    setInputText('')
  }

  return (
    <div>
      <input
        onChange={onChangeInput}
        type="text"
        value={inputText}
        className="input"
        placeholder="Add new todo"
      />
      <button className="button" onClick={onAdding} type="button">
        Add
      </button>
    </div>
  )
}

export default AddTodo
