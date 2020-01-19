import React, { Component } from "react";
import { columns } from "./columns";
import { Table, Input, Button, Icon } from "antd";
import { AddForm } from "./AddForm";
import "antd/dist/antd.css";

const { Search } = Input;

class SweaBoard extends Component {
    state = {
        infoLoaded: true,
        isAddClick: false, //for test
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

export { SweaBoard };
