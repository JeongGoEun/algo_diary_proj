import React, { Component } from "react";
import { columns } from "./columns";
import { Table, Input, Button, Icon } from "antd";
import "antd/dist/antd.css";
import { AddForm } from "./AddForm";
// 레이아웃 다 해보고 반응형 웹 디자인 해보기
const { Search } = Input;

class BojBoard extends Component {
  data = {
    users: []
  };
  state = {
    infoLoaded: true,
    isAddClick: true, //for test
    nav: 1
  };

  componentDidMount() {
    this.setState({ nav: this.props.nav });
  }

  onPlusClick = e => {
    this.setState({ isAddClick: !this.state.isAddClick });
  };

  render() {
    return (
      <div>
        {this.state.infoLoaded ? (
          <div>
            <div>
              <div className="BojBoard">
                {this.state.isAddClick ? (
                  <AddForm onBackClick={this.onPlusClick} />
                ) : (
                  <div>
                    <div style={{ marginBottom: 20 }}>
                      <Search
                        placeholder="input search problem"
                        onSearch={val => console.log(val)}
                        style={{ width: "50%" }}
                      />
                      <Button
                        onClick={this.onPlusClick}
                        style={{ float: "right" }}
                      >
                        {" "}
                        <Icon type="plus" />{" "}
                      </Button>
                    </div>
                    <Table columns={columns.tableColumns} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>empty</div>
        )}
      </div>
    );
  }
}

export { BojBoard };
