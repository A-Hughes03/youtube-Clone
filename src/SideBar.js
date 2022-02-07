import React from "react";
import SideBarRow from "./SideBarRow";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import "./Sidebar.css";

function SideBar() {
  return(
       <div className="sidebar">
        <SideBarRow selected Icon={HomeIcon} title="Home"/>
        <SideBarRow Icon={WhatshotIcon} title="Trending"/>
        <SideBarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
        <hr />
        <SideBarRow Icon={VideoLibraryIcon} title="Library"/>
        <SideBarRow Icon={HistoryIcon} title="History"/>
        <SideBarRow Icon={OndemandVideoIcon} title="Your Videos"/>
        <SideBarRow Icon={WatchLaterIcon} title="Watch Later"/>
        <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
        <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
        <hr />
       </div>
  );
}

export default SideBar;
