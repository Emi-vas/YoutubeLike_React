import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material";
import {Link} from "react-router-dom"

import Videos  from './Videos'
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const VideoDetail = () => {
    const { id } = useParams()
    const [videoDetail, setVideoDetail] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState(null)

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((res) => setVideoDetail(res.items[0]))
        
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((res) => setRelatedVideos(res.items))
        
    }, [id])

    if(!videoDetail || !relatedVideos) {
        return ("loading...")
    }

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}> 
                    <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                        <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls />
                    </Box>
                    <Typography variant="h5" p={2}>
                          {videoDetail.snippet.title }
                    </Typography>
                </Box>
                <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
                    <Videos videos={relatedVideos} direction="column" />
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetail;