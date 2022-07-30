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
    <div className="BgBlue BgPattern w-[20rem] h-full SideNavBg overflow-hidden">
      <div className="pt-8 ">
        <div className="flex justify-center items-center w-full pb-4">
          <div className="w-[80%] py-1 px-2 bg-white rounded-full">
            {/* <img className="w-full h-full rounded-full" src={logo} alt="" /> */}
          </div>
        </div>
        {props.links.map((i, index) => (
          <div onClick={toggleDrawer(anchor, false)}>
            <MenuItem
              // color={colors[index]}
              title={i.name}
              link={i.path}
              icon={i.icon}
            />
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
            className="z-30 fixed top-4 left-5 BgBlue BgPattern p-3 rounded-full "
            onClick={toggleDrawer(anchor, true)}
          >
            <GiHamburgerMenu
              color="white"
              size={30}
              className="m-0 p-0 cursor-pointer"
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
      <Link href={props.link}>
        <div className="flex justify-center items-center gap-3 hover:scale-105 transition-all px-6 my-4">
          <div
            style={{ borderColor: `${props.color}` }}
            className="border-2  rounded-full p-3 "
          >
            {props.icon}
          </div>
          <div
            style={{ borderColor: `${props.color}` }}
            className="flex items-center justify-center text-[22px] border-2 rounded-md w-full text-white"
          >
            {props.title}
          </div>
        </div>
      </Link>
    </div>
  );
};
