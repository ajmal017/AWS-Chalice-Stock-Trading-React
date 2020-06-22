import React, { Component } from 'react';
import Card from "../components/Card/Card";
import fetchURL from "../utils/Fetch";

class AccountHolding extends Component {
    state = {
        AccountHolding: [{
        }]
    };

    componentDidMount() {
        fetchURL(`http://127.0.0.1:8000/holdings/373`)
            .then(returnedData => {
                console.log("Result :", returnedData);
                this.setState({ AccountHolding: returnedData });
            });
    }

    render() {
        return (
            <div>
                <Card cardContents={this.state.AccountHolding} />
            </div >
        )
        //}
    }
}

export default AccountHolding