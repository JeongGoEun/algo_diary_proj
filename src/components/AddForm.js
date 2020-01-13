import React, { Component } from "react";
import { Button, Icon } from "antd";
import './style/style.css'

import "antd/dist/antd.css";

class AddForm extends Component {
    data = {
        users: []
    };
    state = {
        infoLoaded: true,
    };

    onBackClick = e => {
        e.preventDefault()
        this.props.onBackClick()
    }

    componentDidMount() {
        console.log("loaded add form");
    }

    render() {
        return (
            <div>
                <div>
                    <Button id='rollbackBtn' onClick={this.onBackClick}style={{float: 'right'}}> <Icon type="rollback" /> </Button>
                </div>
                <div className="AddForm">AddForm</div>
            </div>
        );
    }
}

export { AddForm };
