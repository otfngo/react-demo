import * as actionTypes from './actionTypes'

const initialState = {
  inputValue: '',
  list: []
}

export default (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  const { type } = action

  if (type === actionTypes.change_input_value) {
    newState.inputValue = action.value
  }

  if (type === actionTypes.add_todo_item) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
  }

  if (type === actionTypes.delete_todo_item) {
    newState.list.splice(action.index, 1)
  }

  if (type === actionTypes.init_list) {
    newState.list = action.data
  }

  return newState
}