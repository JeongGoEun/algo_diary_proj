import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { BojBoard } from "./components/BojBoard";
import { SweaBoard } from "./components/SweaBoard";
import { ProgBoard } from "./components/ProgBoard";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;
class App extends Component {
    state = {
        nav: "1",
        selectedMenu: "false"
    };

    onMenuClick = ({ key }) => {
        this.setState({ nav: key });
    };

    getContent() {
        switch (this.state.nav) {
            case "1":
                return <BojBoard nav={1} />;
            case "2":
                return <SweaBoard nav={2} />;
            case "3":
                return <ProgBoard nav={3} />;
            default:
        }
        this.setState({ selectedMenu: true });
    }
    render() {
        return (
            <div className="App">
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={["1"]}
                            style={{ lineHeight: "64px" }}
                            onClick={this.onMenuClick}
                        >
                            <Menu.Item key="1">BOJ</Menu.Item>
                            <Menu.Item key="2">SWEA</Menu.Item>
                            <Menu.Item key="3">Programmers</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: "20px 20px" }}>
                        <div
                            style={{
                                background: "#fff",
                                padding: 24,
                                minHeight: 280
                            }}
                        >
                            {this.getContent()}
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: "center",
                            color: "rgba(255, 255, 255, 0.65)",
                            background: "#001529"
                        }}
                    >
                        Algorithm Diary ©2020 Created by Goni
                    </Footer>
                </Layout>
            </div>
        );
    }
}

export default App;
