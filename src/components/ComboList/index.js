import React, { Component } from "react";
import ClickOutside from "../../hoc/ClickOutside";
import { Menu, List, Icon, Input } from "antd";

class ComboList extends Component {
  state = {
    editCombo: ""
  };

 editCancel = () => {
    const { cancelCombo } = this.props;
    this.setState({ editCombo: "" });
    cancelCombo();
  };

  editSave = ({ id }) => event => {
    event.preventDefault();
    const { saveCombo } = this.props;
    const { editCombo } = this.state;
    const res = {
      id,
      inputEdit: editCombo
    };
    this.setState({ inputEdit: "" });
    saveCombo(res);
  };

  editCombo = ({ id }) => event => {
    event.stopPropagation()
    const { editComboHash } = this.props;
    editComboHash(id);
  };

  handleInput = event => {
    const { value } = event.target;
    this.setState({
      editCombo: value
    });
  };

  render() {
    const {
      comboHash: { combo }
    } = this.props;
    const { editCombo } = this.state;
    const SubMenu = Menu.SubMenu;
    return (
      <div style={{ width: "60%" }}>
        <List
          itemLayout="horizontal"
          dataSource={combo}
          renderItem={item => (
            <List.Item>
              <Menu theme="dark" mode="inline" key={item.nameCombo}>
                <SubMenu
                  title={
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "400px"
                      }}
                      key={item.id}
                    >
                      <Icon
                        type="edit"
                        theme="filled"
                        onClick={this.editCombo(item)}
                        style={{ fontSize: "1.8em" }}
                      />
                      {item.edit ? (
                        <ClickOutside editCancel={this.editCancel}>
                          <form onSubmit={this.editSave(item)}>
                            <Input
                              value={editCombo}
                              onChange={this.handleInput}
                              autoFocus
                            />
                          </form>
                        </ClickOutside>
                      ) : (
                        <span>{item.nameCombo}</span>
                      )}
                    </span>
                  }
                >
                  {item.hash.map(i => (
                    <Menu.Item key={i.tag}>{i.tag}</Menu.Item>
                  ))}
                </SubMenu>
              </Menu>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ComboList;
