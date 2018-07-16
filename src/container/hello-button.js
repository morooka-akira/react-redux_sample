// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hellow'
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHello('Hellow')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
