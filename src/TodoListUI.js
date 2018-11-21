import React from 'react'
import { Button, Input, List } from 'antd'

const TodoListUI = props => {
  return (
    <div className="padding-n">
      <div className="display-flex">
        <Input 
          className=" margin-right-n"
          ref={props.inputRef}
          value={props.inputValue}
          onChange={props.handleInputChange}
          onKeyUp={props.handleInputKeyUp} />
        <Button type="primary"
          onClick={props.handleBtnClick}>
          submit
        </Button>
      </div>
      <List className="margin-top-n"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => props.handleItemDelete(index)}>{item}</List.Item>)}
      />
    </div>
  )
}

export default TodoListUI