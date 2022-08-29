import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video }) => {
    const videoId = video.id.videoId
    const videoSnippet = video.snippet

    console.log(videoSnippet.thumbnails.high.url)

    return (
        <Card sx={{ width: { md: '320px', xs: '100%' }, borderRadius: "0" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
               <CardMedia 
                    image={videoSnippet?.thumbnails?.high?.url} 
                    sx={{width: 358, height: 180}}
               />
               <CardContent 
                    sx={{background: "#1e1e1e", height: "106px"}}
               >
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant="subtitle1" fontWeight="bold"  style={{color: "white"}}>
                            {videoSnippet?.title.slice(0,60) || demoVideoTitle}
                        </Typography>
                    </Link>
                    <Link to={videoSnippet?.channelId ? `/channel/${videoSnippet.channelId}` : demoChannelUrl}>
                        <Typography variant="subtitle2" fontWeight="bold"  style={{color: "gray"}}>
                            {videoSnippet?.channelTitle.slice(0,60) || demoChannelTitle}
                            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
                        </Typography>
                    </Link>
               </CardContent>
            </Link>
        </Card>
/*         <div>
            <img src={videoSnippet.thumbnails.high.url} alt="" />
        </div> */
    );
};

export default VideoCard;