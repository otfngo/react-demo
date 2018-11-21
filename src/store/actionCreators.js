import * as actionTypes from './actionTypes'

export const getInputChangeAction = value => {
  return {
    type: actionTypes.change_input_value,
    value
  }
}

export const getAddItemAction = () => {
  return {
    type: actionTypes.add_todo_item
  }
}

export const getDeleteItemAction = index => {
  return {
    type: actionTypes.delete_todo_item,
    index
  }
}

export const getInitListAction = data => {
  return {
    type: actionTypes.init_list,
    data
  }
}

export const fetchInitListAction = () => ({
  type: actionTypes.fetch_init_list
})