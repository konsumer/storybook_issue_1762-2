import React from 'react'
import PropTypes from 'prop-types'

/** A dumb component that says "hello" */
export const Demo = ({name}) => (<div>Hello {name}</div>)

Demo.propTypes = {
  /** the name of the person to say "hello" to */
  name: PropTypes.string
}

Demo.defaultProps = {
  name: 'World'
}

export default Demo
