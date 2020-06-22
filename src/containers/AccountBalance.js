import React, { Component } from 'react';
import '../styles/TableDisplay.css';
import DenseTable from "../components/Table/DenseTable";

class AccountBalance extends Component {
    state = {
        AccountBalanceSeries: []
    };

    componentDidMount() {
        console.log("Component Mount getting called");
        const options = {
            headers: new Headers({
                'content-type': 'application/json',
                'Accept': 'application/json'
            }),
            type: "get",
            dataType: "json"
        };

        fetch('http://127.0.0.1:8000/accountbalance/373', options)
            .then(response => response.json())
            .then(data => {
                this.setState({ AccountBalanceSeries: data })
                console.log("Headers: ", data)
            })
    }

    renderTableHeader() {
        return (
            <tr>
                <th>Account ID</th>
                <th>Balance Amount ($)</th>
            </tr>
        )
    }

    renderTableData() {
        return this.state.AccountBalanceSeries.map((AccountBalance) => {
            const { account_id, balance_amount } = AccountBalance //destructuring
            return (
                <tr key={account_id}>
                    <td>{account_id}</td>
                    <td>{balance_amount}</td>
                </tr>
            )
        })
    }

    render() {
        console.log("Array Length: ", this.state.AccountBalanceSeries.length);
        // if (this.state.AccountBalanceSeries.length > 0) {
        return (
            <div>
                <DenseTable contents={this.state.AccountBalanceSeries} />
                <table id='tabledata'>
                    <tbody >
                        {this.renderTableHeader()}
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div >
        )
        //}
    }
}

export default AccountBalance