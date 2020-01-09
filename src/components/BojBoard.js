import React, { Component } from "react";
import "antd/dist/antd.css";

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
        console.log("navIdx : " + this.data.navIdx);
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
                        <div className="BojBoard">BojBoard</div>
                    </div>
                ) : (
                    <div>empty</div>
                )}
            </div>
        );
    }
}

export { BojBoard };
