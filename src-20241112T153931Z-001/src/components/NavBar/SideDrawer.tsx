import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

interface props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const SideDrawer: React.FC<props> = ({ open, setOpen }) => {
  const list = () => (
    <Box
      sx={{ width: 250, height: "100%" }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List className="flex flex-col justify-evenly  h-full">
        {[
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
          "All mail",
          "Trash",
          "Spam",
        ].map((text, index) => (
          <ListItem
            key={text}
            sx={{ display: { xs: "flex", md: "none" } }}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        {["Drafts", "All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
      {/* <List className="flex flex-col justify-evenly  h-1/2">
        {["Drafts", "All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div onClick={() => setOpen(false)}>
      {/* {(["right"] as const).map((anchor) => ( */}
      <React.Fragment key={"right"}>
        <SwipeableDrawer
          anchor={"right"}
          open={open}
          onClose={() => console.log("opened")}
          onOpen={() => console.log("opened")}
          className="drawer"
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
      {/* ))} */}
    </div>
  );
};

export default SideDrawer;
