// @flow

import { connect } from 'react-redux'

import { sayHelloAsync } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hellow asynchronously and send 1234'
})

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  handleClick: () => { dispatch(sayHelloAsync(1234)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
