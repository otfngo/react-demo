import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import TodoListUI from './TodoListUI';

class TodoList extends Component {
  constructor(props) {
    super(props)
    
    this.inputRef = React.createRef()
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  render() {
    const { inputValue, list, handleInputChange, handleItemDelete } = this.props
    
    return (
      <TodoListUI
        inputRef={this.inputRef}
        inputValue={inputValue}
        list={list}
        handleInputChange={e => handleInputChange(e.target.value)}
        handleInputKeyUp={this.handleInputKeyUp}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={handleItemDelete} />
    )
  }

  componentDidMount() {
    this.props.fetchInitList()
  }

  handleInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleBtnClick()
    }
  }

  handleBtnClick() {
    this.focusInput()

    if (this.isInputNullOrWhiteSpace()) {
      this.initialInput()
      return
    }

    this.props.handleItemAdd()
  }

  focusInput() {
    this.inputRef.current.focus()
  }

  isInputNullOrWhiteSpace() {
    if (this.props.inputValue == null || this.props.inputValue.trim() === '') {
      return true
    }
    return false
  }

  initialInput() {
    this.props.handleInputChange('')
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitList() {
      const action = actionCreators.fetchInitListAction()
      dispatch(action)
    },
    handleInputChange(value) {
      const action = actionCreators.getInputChangeAction(value)
      dispatch(action)
    },
    handleItemAdd() {
      const action = actionCreators.getAddItemAction()
      dispatch(action)
    },
    handleItemDelete(index) {
      const action = actionCreators.getDeleteItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
