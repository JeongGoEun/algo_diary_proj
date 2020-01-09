import React, { Component } from "react";
import { columns } from "./columns";
import { Table, Input, Button, Icon } from "antd";
import "antd/dist/antd.css";
// 레이아웃 다 해보고 반응형 웹 디자인 해보기
const { Search } = Input;

class BojBoard extends Component {
    data = {
        users: []
    };
    state = {
        infoLoaded: true,
        nav: 1
    };

    componentDidMount() {
        this.setState({ nav: this.props.nav });
    }

    // db fetch about navIdx
    // getProbList(navIdx) {
    //     fetch("/users")
    //         .then(res => res.json())
    //         .then(users => {
    //             this.data.users = users
    //             this.setState({ usersLoaded: true })
    //         });
    // }

    render() {
        return (
            <div>
                {this.state.infoLoaded ? (
                    <div>
                        <div style={{ marginBottom: 20 }}>
                            <Search
                                placeholder="input search problem"
                                onSearch={val => console.log(val)}
                                style ={{width: '50%'}}
                            />
                            <Button style={{float: 'right'}}> <Icon type="plus" /> </Button>
                        </div>
                        <div>
                            <div className="BojBoard">
                                <Table columns={columns.tableColumns} />
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
