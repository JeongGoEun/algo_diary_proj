import React, { Component } from "react";
import { Table } from 'antd';
import {columns} from './columns'
import 'antd/dist/antd.css';

import Join from './Join'

class Board extends Component {
    data = {
        users: [],
    }
    constructor(props) {
        super(props)
        this.state={
            usersLoaded: false,
            isUpdated: false
        }
        this.stateRefresh =this.stateRefresh.bind(this)
        this.getData = this.getData.bind(this)
    }

    stateRefresh (){
        console.log('refresh')
        this.getData()
        //this.setState({isUpdated: true})
    }

    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch("/users")
            .then(res => res.json())
            .then(users => {
                this.data.users = users
                this.setState({ usersLoaded: true })
            });
    }
    render() {
        return (
            <div>
            {this.state.usersLoaded
                ?
                <div>
                    <div><Join stateRefresh={this.stateRefresh}/> </div>
                    <div className="Board">
                        <Table columns={columns.infoColumns} dataSource={this.data.users} />
                    </div>
                </div>
                :
                <div>empty</div>
            }
            </div>
        );
    }
}

export default Board;
