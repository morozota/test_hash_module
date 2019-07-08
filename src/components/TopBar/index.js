import React, { PureComponent } from 'react'
import nanoId from 'nanoid'
import { Input, Button, Select, message } from 'antd'
import { filterHash } from '../../heleper'

class TopBar extends PureComponent {
  state = {
    inputUser: '',
    selectedItems: [],
  }

  error = title => {
    message.warning(`hashTag: ${title} already exists`)
    this.props.checkHashCancel()
  }

  componentDidUpdate() {
    const {
      hashReducer: { allreadyhash, allreadyhashTitle },
    } = this.props
    if (allreadyhash) {
      return this.error(allreadyhashTitle)
    }
  }

  handleInput = event => {
    const { value } = event.target
    this.setState({
      inputUser: value,
    })
  }
  addHash = event => {
    event.preventDefault()
    const { addHash } = this.props
    const { inputUser } = this.state
    if (!inputUser) return
    if (!filterHash(inputUser)) {
      this.setState({
        inputUser: '',
      })
      return
    }

    const item = {
      id: nanoId(),
      title: filterHash(inputUser),
    }

    addHash(item)

    this.setState({
      inputUser: '',
    })
  }

  addCombo = () => {
    const { addComboHash } = this.props
    const { selectedItems } = this.state
    if (selectedItems.length === 0) return

    const result = {
      selectedItems,
      id: nanoId(),
    }
    addComboHash(result)
    this.setState({
      selectedItems: [],
    })
  }

  handleSelect = selectedItems => {
    this.setState({ selectedItems })
  }

  render() {
    const { inputUser, selectedItems } = this.state
    const {
      hashReducer: { items },
    } = this.props

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <form onSubmit={this.addHash}>
          <Input placeholder="#hashtag" style={{ width: '200px' }} value={inputUser} onChange={this.handleInput} />
        </form>
        <Select
          mode="multiple"
          style={{ width: '40%' }}
          placeholder={items.length === 0 ? 'Please add hash' : 'add combo'}
          value={selectedItems}
          notFoundContent="Hashtag Not found"
          onChange={this.handleSelect}
          disabled={items.length === 0 ? true : false}
        >
          {items.map(item => (
            <Select.Option key={item.id} value={item.title}>
              {item.title}
            </Select.Option>
          ))}
        </Select>
        <Button type="primary" onClick={this.addCombo}>
          add combo
        </Button>
        <Button onClick={this.addHash} ghost>
          add hash
        </Button>
      </div>
    )
  }
}

export default TopBar
