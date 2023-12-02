import {useState} from 'react'

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
      <input onChange={onChangeInput} type="text" value={inputText} />
      <button onClick={onAdding} type="button">
        Add
      </button>
    </div>
  )
}

export default AddTodo
