
import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Body from "./Layouts/Body/Body";
import { menuitems, sideBarItems } from "../store";

export default class extends Component {
  state = {
    sideBarItems,
    selectedSideBarItem: {},
    selectedMainMenuItem: ""
  };

  // all the exercies to be sorted by selected menu item
  // result- a dictionary with menu item as key and values as each exercise object
  getSideBarItemsByMainMenu() {
    return Object.entries(
      this.state.sideBarItems.reduce((sideBarItems, sidebaritem) => {
        const { menuitems } = sidebaritem;

        sideBarItems[menuitems] = sideBarItems[menuitems]
          ? [...sideBarItems[menuitems], sidebaritem]
          : [sidebaritem];

        return sideBarItems;
      }, {})
    );
  }

  handleMainMenuSelected = selectedMainMenuItem => {
    this.setState({
      selectedMainMenuItem
    });
  };

  handleSideBarItemSelected = id => {
    //console.log("Selected side bar item: ", id);
    this.setState(({ sideBarItems }) => ({
      selectedSideBarItem: sideBarItems.find(ex => ex.id === id)
    }));
  };

  render() {
    const sideBarItems = this.getSideBarItemsByMainMenu(), { selectedMainMenuItem, selectedSideBarItem } = this.state;
    //console.log("Side Bar Item: ", this.getSideBarItemsByMainMenu());

    return (
      <Fragment>
        <Header
          menuitems={menuitems}
          selectedMainMenuItem={selectedMainMenuItem}
          onSelect={this.handleMainMenuSelected}
        />
        <Body
          selectedMainMenuItem={selectedMainMenuItem}
          sideBarItems={sideBarItems}
          onSelect={this.handleSideBarItemSelected}
          selectedSideBarItem={selectedSideBarItem}
        />
        <Footer />
      </Fragment>
    );
  }
}