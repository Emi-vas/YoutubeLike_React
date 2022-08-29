import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from "@mui/material"
import Sidebar from './Sidebar';

import { colors } from '../utils/constants';
import Videos from './Videos';
import { fetchFromAPI } from "../utils/fetchFromAPI"

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New")
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
       <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box 
                sx={{ height: { sx: "auto", md: "93vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}
            >
                <Sidebar
                    selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                />

                <Typography className="copyright" variant='body2' sx={{ mt: 1.5}}>
                    Copyright 2022 - Emilien VASCHALDE
                </Typography>
            </Box>

            <Box p={2} sx={{ height: "90vh", flex: 2, overflow: "scroll" }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                    {selectedCategory}{" "}
                    <span style={{ color: colors.red2 }}>
                        Videos
                    </span>
                </Typography>

                <Videos videos={videos} />
            </Box>
       </Stack>
    );
};

export default Feed;