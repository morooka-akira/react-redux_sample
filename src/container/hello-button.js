// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../component/button'
import type { Dispatch } from 'redux'

const mapStateToProps = () => ({
  label: 'Say hellow'
})

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  handleClick: () => { dispatch(sayHello('Hellow')) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
