import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { GiPartyPopper } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";

export default function MobileNav(props) {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className="w-[20rem] h-full  overflow-hidden bg-gray-50 dark:bg-gray-800">
      <div className="pt-8 ">
        <div className="flex justify-center items-center w-full pb-4"></div>
        {props.links.map((i, index) => (
          <div key={index} onClick={toggleDrawer(anchor, false)}>
            <MenuItem title={i.name} link={i.path} icon={i.icon} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <div key={anchor}>
          <div
            className="z-30 fixed top-8 left-5 BgBlue BgPattern p-3 rounded-full "
            onClick={toggleDrawer(anchor, true)}
          >
            <GiHamburgerMenu
              size={30}
              className="m-0 p-0 cursor-pointer text-gray-800 dark:text-gray-100"
            />
          </div>
          <SwipeableDrawer
            disableSwipeToOpen
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
}

const MenuItem = (props) => {
  return (
    <div className="z-30">
      <a href={props.link}>
        <div className="flex justify-center items-center gap-3 hover:scale-105 transition-all px-6 my-4">
          <div
            style={{ borderColor: `${props.color}` }}
            className="border-2  rounded-full p-3 text-gray-800 dark:text-gray-50  "
          >
            {props.icon}
          </div>
          <div
            style={{ borderColor: `${props.color}` }}
            className="flex items-center justify-center text-[22px] border-2 rounded-md w-full text-gray-800 dark:text-gray-50 "
          >
            {props.title}
          </div>
        </div>
      </a>
    </div>
  );
};
