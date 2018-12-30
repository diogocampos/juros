import React from 'react'
import { connect } from 'react-redux'


function Calculator(props) {
  const { mode } = props
  return <p>[{mode} calculator]</p>
}

const mapStateToProps = state => ({
  mode: state.mode,
})

export default connect(mapStateToProps)(Calculator)
