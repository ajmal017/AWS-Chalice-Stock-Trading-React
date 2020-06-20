import React from "react";
import { Paper, Typography } from "@material-ui/core";
import ComponentController from "../../ComponentController/ComponentController";

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: "auto"
    }
};

export default ({ selectedSideBarItem: { id, title } }) => {
    return (
        <Paper style={styles.Paper}>
            <Typography variant="h6">{title}</Typography>
            <ComponentController id={id} />
        </Paper>
    );
};