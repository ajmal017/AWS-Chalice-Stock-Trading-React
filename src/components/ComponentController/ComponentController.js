import React from "react";
import AccountHolding from "../../containers/AccountHolding";
import DenseTable from "../../components/Table/DenseTable";

export default ({ id }) => {
    let componentToRender = ""
    switch (id) {
        case 'holdings':
            componentToRender = <AccountHolding />;
            break;
        case 'position':
            componentToRender = <DenseTable />;
            break;
        default:
            break;
    };
    return (componentToRender);
};