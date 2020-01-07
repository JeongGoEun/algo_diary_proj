import React, { Component } from "react";
import { Form, Input, Button, Icon } from 'antd';
import 'antd/dist/antd.css';

class Join extends Component {
    constructor(props) {
        super(props)
        this.state ={
            isUpdated: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {                
                var data = {
                    id: values.username,
                    pw: values.password
                }
                console.log("send data: ", data);
                
                fetch("/users/add", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                }).then(res => {
                    console.log('insert: '+res)
                    if(res.status >= 400) {
                        throw new Error("Bad response from server")
                    }
                    return res.json()
                }).then(data => {
                    console.log('insert data: '+data)
                    this.setState({isUpdated: true})
                    this.props.stateRefresh()
                })
            }
        });
    };

    render() {
        const {
            getFieldDecorator,
            getFieldError,
            isFieldTouched
        } = this.props.form;

        // Only show error after a field is touched.
        const usernameError =
            isFieldTouched("username") && getFieldError("username");
        const passwordError =
            isFieldTouched("password") && getFieldError("password");
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item
                    validateStatus={usernameError ? "error" : ""}
                    help={usernameError || ""}
                >
                    {getFieldDecorator("username", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your username!"
                            }
                        ]
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="user"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                />
                            }
                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item
                    validateStatus={passwordError ? "error" : ""}
                    help={passwordError || ""}
                >
                    {getFieldDecorator("password", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your Password!"
                            }
                        ]
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="lock"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(Join)
