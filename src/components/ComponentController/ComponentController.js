import React from "react";
import AccountBalance from "../../containers/AccountBalance";

export default ({ id }) => {
    let componentToRender = ""
    switch (id) {
        case 'account-balance':
            console.log("Account Balance comp being called");
            componentToRender = <AccountBalance />;
            break;
        default:
            break;
    };
    return (componentToRender);
};