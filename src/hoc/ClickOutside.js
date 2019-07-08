import React, { Component } from 'react'

class ClickOutside extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }
  setWrapperRef = node => {
    this.wrapperRef = node
  }
  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.editCancel()
    }
  }

  render() {
    const { children } = this.props
    return <div ref={this.setWrapperRef}>{children}</div>
  }
}

export default ClickOutside
