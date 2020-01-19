import React, { Component } from "react";
import { Button, Icon, Radio, Form, Input } from "antd";
import {columns} from './columns'
import "./style/style.css";
import "antd/dist/antd.css";

class AddForm extends Component {
  data = {
    type: 1,  // type of prob
    no: 0,    // no of prob
    url: '',  // url of prob
    code: '', // code of prob
    memo: '', // memo of prob
  };
  state = {
    infoLoaded: true,
    isAddClick: false,
    isUpdated: false,
    radioVal: 1,
  };

  onBackClick = e => {
    e.preventDefault();
    this.props.onBackClick();
  };

  onSaveClick = e => {
    for(var key in this.data){
      console.log(key,this.data[key])
    }
  }

  onRadioChange = e => {
    this.data.type = e.target.value
    this.setState({radioVal: e.target.value})
  }

  onInputChange = e => {
    var val = e.target.value
    switch(e.target.id) {
      case 'no': this.data.no = val; break
      case 'code': this.data.code = val; break
      case 'memo': this.data.memo = val; break
      case 'url': this.data.url=val; break
      default: break
    }
    this.setState({isUpdated: true})
  }

  componentDidMount() {
    console.log("loaded add form");
    this.data.type=1;
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
                <center><Radio.Group options={columns.probOptions} onChange={this.onRadioChange} value={this.state.radioVal}> </Radio.Group></center>
            </div>
            <div id='formContent'>
                <Form layout="inline">
                    <Form.Item label="NO: ">
                        <Input id='no' onChange={this.onInputChange} placeholder="input problem no"/>
                    </Form.Item>
                    <Form.Item label="URL: " style={{float: 'right'}}>
                        <Input id='url' onChange={this.onInputChange} style={{}}placeholder="input problem url"/>
                    </Form.Item>
                </Form>
                <hr></hr>
                <div className='addTextArea'>
                    <p>CODE</p>
                    <Input.TextArea id='code' onChange={this.onInputChange} rows={8}></Input.TextArea>
                </div>
                <div className='addTextArea'>
                    <p>MEMO</p>
                    <Input.TextArea id='memo' onChange={this.onInputChange} rows={8}></Input.TextArea>
                </div>
                <center><Button onClick={this.onSaveClick}>SAVE</Button></center>
            </div>
        </div>
      </div>
    );
  }
}

export { AddForm };
