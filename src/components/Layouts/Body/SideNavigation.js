import React, { Fragment } from "react";
import { Paper, Typography, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: "auto"
    }
};

export default ({
    selectedMainMenuItem,
    sideBarItems,
    onSelect,
    selectedSideBarItem: {
        id,
        title = "Welcome!",
        description = "Please select an exercise"
    }
}) => {
    return (
        <Paper style={styles.Paper}>
            {sideBarItems.map(([group, sideBarItems]) =>
                !selectedMainMenuItem || selectedMainMenuItem === group ? (
                    <Fragment key={group}>
                        <Typography variant="h5" style={{ textTransform: "capitalize" }}>
                            {group}
                        </Typography>
                        <List component="ul">
                            {sideBarItems.map(({ id, title }) => (
                                <ListItem button key={id} onClick={() => onSelect(id)}>
                                    <ListItemText primary={title} />
                                </ListItem>
                            ))}
                        </List>
                    </Fragment>
                ) : null
            )}
        </Paper>
    );
};

//https://stackoverflow.com/questions/52108216/react-material-ui-multiple-collapse
