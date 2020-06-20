import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Paper, Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";

export default ({ menuitems, selectedMainMenuItem, onSelect }) => {
  const index = selectedMainMenuItem
    ? menuitems.findIndex(group => group === selectedMainMenuItem) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? "" : menuitems[index - 1]);
  };

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Security Trading
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          {menuitems.map(menuitem => (
            <Tab key={menuitem} label={menuitem} />
          ))}
        </Tabs>
      </Paper>
    </Fragment>
  );
};
