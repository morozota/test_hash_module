import React, { Component } from "react";
import { List, Icon, Input } from "antd";
import { filterHash } from "../../heleper";
import ClickOutside from "../../hoc/ClickOutside";

class HashTagList extends Component {
  state = {
    inputEdit: ""
  };

  handleDeleteHash = ({ id }) => {
    const { deleteHash } = this.props;
    deleteHash(id);
  };

  handleEdit = ({ id }) => {
    const { editHash } = this.props;
    editHash(id);
  };

  handleInputEdit = event => {
    const { value } = event.target;
    this.setState({
      inputEdit: value
    });
  };

  editSave = ({ id }) => event => {
    event.preventDefault();
    const { saveHash } = this.props;
    const { inputEdit } = this.state;
    if (!filterHash(inputEdit)) return;
    const res = {
      id,
      title: filterHash(inputEdit)
    };
    this.setState({ inputEdit: "" });
    saveHash(res);
  };

  editCancel = () => {
    const { editCancel } = this.props;
    this.setState({ inputEdit: "" });
    editCancel();
  };

  render() {
    const {
      hashReducer: { items }
    } = this.props;
    const { inputEdit } = this.state;

    return (
      <List
        style={{ width: "35%", height: "400px", overflow: "auto" }}
        locale={{ emptyText: "NoHash" }}
        //bordered={true}
        itemLayout="horizontal"
        dataSource={items}
        renderItem={item =>
          !item.edit ? (
            <List.Item
              actions={[
                <Icon
                  type="edit"
                  theme="twoTone"
                  onClick={this.handleEdit.bind(null, item)}
                  style={{ fontSize: "1.7em" }}
                />,
                <Icon
                  type="delete"
                  theme="twoTone"
                  onClick={this.handleDeleteHash.bind(null, item)}
                  style={{ fontSize: "1.7em" }}
                />
              ]}
            >
              {item.title}
            </List.Item>
          ) : (
            <ClickOutside editCancel={this.editCancel}>
              <List.Item
                actions={[
                  <Icon
                    type="delete"
                    theme="twoTone"
                    onClick={this.handleDeleteHash.bind(null, item)}
                  />
                ]}
              >
                <form onSubmit={this.editSave(item)}>
                  <Input
                    value={inputEdit}
                    onChange={this.handleInputEdit}
                    autoFocus
                  />
                </form>
              </List.Item>
            </ClickOutside>
          )
        }
      />
    );
  }
}

export default HashTagList;
