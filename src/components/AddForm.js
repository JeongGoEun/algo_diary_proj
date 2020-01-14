import React, { Component } from "react";
import { Button, Icon, Radio, Form, Input } from "antd";
import {columns} from './columns'
import "./style/style.css";
import "antd/dist/antd.css";

class AddForm extends Component {
  data = {
    users: []
  };
  state = {
    infoLoaded: true,
    radioValue: 1,
  };

  onBackClick = e => {
    e.preventDefault();
    this.props.onBackClick();
  };

  onRadioChange = e => {
    console.log('radio val: ',e.target.value)
    this.setState({radioValue: e.target.value})
  }

  componentDidMount() {
    console.log("loaded add form");
  }

  render() {
    return (
      <div>
        <div>
          <Button
            id="rollbackBtn"
            onClick={this.onBackClick}
            style={{ float: "right" }}
          >
            <Icon type="rollback" />
          </Button>
        </div>
        <div className="AddForm">
            <div id='radioGroup'>
                <center><Radio.Group options={columns.probOptions} onChange={this.onRadioChange} value={this.state.radioValue}> </Radio.Group></center>
            </div>
            <div id='formContent'>
                <Form layout="inline">
                    <Form.Item label="NO: ">
                        <Input placeholder="input problem no"/>
                    </Form.Item>
                    <Form.Item label="URL: " style={{float: 'right'}}>
                        <Input style={{width: '500px'}}placeholder="input problem url"/>
                    </Form.Item>
                </Form>
                <hr></hr>
                <div class='addTextArea'>
                    <p>CODE</p>
                    <Input.TextArea rows={8}></Input.TextArea>
                </div>
                <div class='addTextArea'>
                    <p>MEMO</p>
                    <Input.TextArea rows={8}></Input.TextArea>
                </div>
                <center><Button>OK</Button></center>
            </div>
        </div>
      </div>
    );
  }
}

export { AddForm };
