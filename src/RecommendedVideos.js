import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return(
       <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
          <VideoCard 
            title="Installing 100 Viruses On My Gaming PC"
            views="120K views"
            timestamp="1 day ago"
            channelImage="https://yt3.ggpht.com/D4AMJUsvO7QJh_xBmnghoTC1KQ0_8XYH0gUXstcIPBGsVxuUTq2mTSufurLGum6yu0-gKx_QLA=s68-c-k-c0x00ffffff-no-rj"
            channel="Basically Homeless"
            image="https://i.ytimg.com/vi/decVHm-51yA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9_cTA4rnhZs_hKdZU3mgwsnniNw"
          />
          <VideoCard 
            title="Joe Rogan Experience #1255 - Alex Jones Returns!"
            views="30M views"
            timestamp="Streamed 2 years ago"
            channelImage="https://yt3.ggpht.com/ytc/AKedOLS2KcFQ2ddXLYVpxbXNVqf7nsi0NWg4_R4HqKIl=s68-c-k-c0x00ffffff-no-rj"
            channel="PowerfulJRE"
            image="https://i.ytimg.com/an_webp/-5yh2HcIlkU/mqdefault_6s.webp?du=3000&sqp=CKvl_48G&rs=AOn4CLBOoPnC2oNt5SD2tTgTNXr3sFMkcQ"
          />
          <VideoCard 
            title="Top 10 3D Printable Tools Every Maker Should, Like, Make"
            views="1.2M views"
            timestamp="1 year ago"
            channelImage="https://yt3.ggpht.com/ytc/AKedOLQBimYLvUNTJZUqV7kdwGdD7_q2HkY9Gb2ZNMuXfUs=s68-c-k-c0x00ffffff-no-rj"
            channel="Zack Freedman"
            image="https://i.ytimg.com/vi/1kG1D-e284A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQsIQcgVW5HPNEPuwvVr9qS9ZUAQ"
          />
          <VideoCard 
            title="Solve This Coding Question To Win $100"
            views="1.3M views"
            timestamp="7 months ago"
            channelImage="https://yt3.ggpht.com/0B67SieAFdmemnoCm-AlJ80ZDGgIUA2dBo1KwwzFfXONnXT0oFPNKD11fT72LMXiqeWdKDSAVw=s68-c-k-c0x00ffffff-no-rj"
            channel="Nick White"
            image="https://i.ytimg.com/vi/_DvSIoQKBac/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXfm0wPVh5nhIU8pq6WHt8XGcpfg"
          />
          <VideoCard 
            title="What happens if you touch a rocket?"
            views="1.1M views"
            timestamp="9 days ago"
            channelImage="https://yt3.ggpht.com/ytc/AKedOLQR-qqxnUudDLNB_wUbOikqlukGkFM6L4zSjrLGIQ=s68-c-k-c0x00ffffff-no-rj"
            channel="TheBackyardScientist"
            image="https://i.ytimg.com/vi/Q1AJ3QGvrb4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHw_RgKYGrbyuWXfS-gPFjOS--iA"
          />
          <VideoCard 
            title="ULTIMATE Filament Storage Solution"
            views="27K views"
            timestamp="1 day ago"
            channelImage="https://yt3.ggpht.com/ytc/AKedOLQBimYLvUNTJZUqV7kdwGdD7_q2HkY9Gb2ZNMuXfUs=s68-c-k-c0x00ffffff-no-rj"
            channel="3D Printing Nerd"
            image="https://i.ytimg.com/vi/sygO-djPwvg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJwlqLNm_SbMwcyWRTeF1l7Ahu2g"
          />
          <VideoCard 
          title="Solve This Coding Question To Win $100"
          views="1.3M views"
          timestamp="7 months ago"
          channelImage="https://yt3.ggpht.com/0B67SieAFdmemnoCm-AlJ80ZDGgIUA2dBo1KwwzFfXONnXT0oFPNKD11fT72LMXiqeWdKDSAVw=s68-c-k-c0x00ffffff-no-rj"
          channel="Nick White"
          image="https://i.ytimg.com/vi/_DvSIoQKBac/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXfm0wPVh5nhIU8pq6WHt8XGcpfg"
        />
        <VideoCard 
          title="What happens if you touch a rocket?"
          views="1.1M views"
          timestamp="9 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQR-qqxnUudDLNB_wUbOikqlukGkFM6L4zSjrLGIQ=s68-c-k-c0x00ffffff-no-rj"
          channel="TheBackyardScientist"
          image="https://i.ytimg.com/vi/Q1AJ3QGvrb4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHw_RgKYGrbyuWXfS-gPFjOS--iA"
        />
        <VideoCard 
          title="ULTIMATE Filament Storage Solution"
          views="27K views"
          timestamp="1 day ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQBimYLvUNTJZUqV7kdwGdD7_q2HkY9Gb2ZNMuXfUs=s68-c-k-c0x00ffffff-no-rj"
          channel="3D Printing Nerd"
          image="https://i.ytimg.com/vi/sygO-djPwvg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJwlqLNm_SbMwcyWRTeF1l7Ahu2g"
        />
        </div>
       </div>
  );
}

export default RecommendedVideos;
