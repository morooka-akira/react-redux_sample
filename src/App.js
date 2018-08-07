// @flow
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { connect } from 'react-redux'
import { addToDo, removeToDo } from './actions'
import type { Dispatch } from 'redux'

import HelloButton from './container/hello-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import MessageAsync from './container/message-async'

type Props = {
  onAddToDo: Function,
  onRemoveToDo: Function,
  todos: Function
};
type State = {
  input: string
}
class App extends Component<Props, State> {
  constructor () {
    super()
    this.state = {
      input: ''
    }
  }
  render () {
    const { onAddToDo, onRemoveToDo, todos } = this.props
    const { input } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          {
            todos.map(todo => {
              return (
                <li key={todo}>
                  <span>{todo}</span>
                  <button onClick={ () => onRemoveToDo(todo) } >削除</button>
                </li>
              )
            })
          }
        </ul>
        <input type="text" onChange={ e => this.setState({ input: e.target.value })} />
        <button onClick={ () => onAddToDo(input) } >追加</button>
        <Message />
        <HelloButton />
        <MessageAsync />
        <HelloAsyncButton />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.list
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    onAddToDo (todo) {
      dispatch(addToDo(todo))
    },
    onRemoveToDo (todo) {
      dispatch(removeToDo(todo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
