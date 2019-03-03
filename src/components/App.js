import React, { Component } from "react";
import store from "../store";
import TopBarContainer from "../container/TopBarContainer";
import HashTagContainer from "../container/HashTagContainer";
import ComboContainer from "../container/ComboContainer";
import { Provider } from "react-redux";
import { Layout } from "antd";

class App extends Component {
  render() {
    const { Header, Content } = Layout;
    return (
      <Provider store={store}>
        <Layout
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div style={{ width: "800px" }}>
            <Header>
              <TopBarContainer />
            </Header>
            <Content
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <HashTagContainer />
              <ComboContainer />
            </Content>
          </div>
        </Layout>
      </Provider>
    );
  }
}

export default App;
