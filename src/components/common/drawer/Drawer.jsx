import React, { useContext, useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { MyContext } from "../../../urlContext/AppContext";
import TabSwitch from "../tab/TabSwitch";

export default function DrawerUi() {
  const { tab, setTab } = useContext(MyContext);
  const [state, setState] = useState({
    right: false,
  });
  useEffect(() => {}, [tab]);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = (tab) => {
    setTab(tab);
  };

  return (
    <div id="myDrawer">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ fontSize: "2.1rem", color: "#252525" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <TabSwitch setState={setState} state={state} anchor={anchor} />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
