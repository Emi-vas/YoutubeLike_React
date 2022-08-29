import { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material"
import { useParams } from 'react-router-dom';

import { colors } from '../utils/constants';
import Videos from './Videos';
import { fetchFromAPI } from "../utils/fetchFromAPI"

const SearchFeed = () => {
    const [videos, setVideos] = useState([])
    const {searchTerm} = useParams()

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm])

    return (
        <Box p={2} sx={{ height: "90vh", flex: 2, overflow: "scroll" }}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
                Search result for{" "} {searchTerm}
                <span style={{ color: colors.red2 }}>
                    Videos
                </span>
            </Typography>

            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;