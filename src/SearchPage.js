import React from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import "./SearchPage.css";

function SearchPage() {
  return(
       <div className="searchPage">
        <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow 
        image="https://yt3.ggpht.com/ytc/AKedOLSt87v_H7nuin-D_UoJkoy37JF98nFOFzJ454dX=s68-c-k-c0x00ffffff-no-rj"
        channel="Mark Rober"
        verified
        subs="21.1M"
        noOfVideos={104}
        description="Former NASA and Apple engineer. Current YouTuber and friend of science."
        />

        <hr />

        <VideoRow 
            views="24M"
            subs="21.1M"
            description="Join #TeamSeas at https://TeamSeas.org (make sure you join the MarkRober team when donating)
            $1 is one less pound of trash in the Ocean.  
            We need to remove 30,000,000 lbs by the end of the year!!"
            timestamp="11:43"
            channel="Mark Rober"
            title="This Robot Eats Trash #TeamSeas"
            image="https://i3.ytimg.com/vi/pXDx6DjNLDU/maxresdefault.jpg"
        />

        <VideoRow 
            views="32M"
            subs="21.1M"
            description="Happy to finally release this one after 5 years of development :)
            Subscribe to KiwiCo and build your own domino machine at home"
            timestamp="15:58"
            channel="Mark Rober"
            title="World Record Domino Robot(100k dominoes in 24hrs)"
            image="https://i3.ytimg.com/vi/8HEfIJlcFbs/maxresdefault.jpg"
        />

        <VideoRow 
            views="21M"
            subs="21.1M"
            description="Merry Christmas ya filthy animals. If you want to learn the design fundamentals it takes to make something like the glitter bomb, enroll in my course"
            timestamp="18:27"
            channel="Mark Rober"
            title="EXPLODING Glitter Bomb 4.0 vs. Package Thieves"
            image="https://i3.ytimg.com/vi/3c584TGG7jQ/maxresdefault.jpg"
        />

        <VideoRow 
            views="96M"
            subs="21.1M"
            description="I don't like sand. It's coarse, and rough, and irritating, and it gets everywhere."
            timestamp="9:08"
            channel="Mark Rober"
            title="Liquid Sand Hot Tub- Fluidized air bed"
            image="https://i3.ytimg.com/vi/My4RA5I0FKs/maxresdefault.jpg"
        />

        <VideoRow 
            views="54M"
            subs="21.1M"
            description="I bit off more than I could chew.  Join me this summer in my Creative Engineering class!!"
            timestamp="19:12"
            channel="Mark Rober"
            title="Backyard Squirrel Maze 2.0- The Walnut Heist"
            image="https://i3.ytimg.com/vi/pXDx6DjNLDU/maxresdefault.jpg"
        />

        <VideoRow 
            views="20M"
            subs="21.1M"
            description="I have been working on this board for over 3 years.  Super pumped to finally share it with all y'all."
            timestamp="5:35"
            channel="Mark Rober"
            title="Automatic Bullseye, MOVING DARTBOARD"
            image="https://i3.ytimg.com/vi/MHTizZ_XcUM/maxresdefault.jpg"
        />
       </div>
    );
}

export default SearchPage;
