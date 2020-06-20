import React from "react";
import { Grid } from "@material-ui/core";
import SideNavigation from "./SideNavigation";
import Contents from "./Contents";

export default ({
  selectedMainMenuItem,
  sideBarItems,
  onSelect,
  selectedSideBarItem
}) => {
  return (
    <Grid container>
      <Grid item sm={2}>
        <SideNavigation
          selectedMainMenuItem={selectedMainMenuItem}
          sideBarItems={sideBarItems}
          onSelect={onSelect}
          selectedSideBarItem={selectedSideBarItem}
        />
      </Grid>
      <Grid item sm={10}>
        <Contents selectedSideBarItem={selectedSideBarItem} />
      </Grid>
    </Grid >
  );
};

//https://stackoverflow.com/questions/52108216/react-material-ui-multiple-collapse
