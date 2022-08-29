import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from "react-router-dom"

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channel }) => {


    return (
    <Box
        sx={{
            boxShadow: "none",
            borderRadius: "20px"
        }}
    >
        <Link to={`/channel/${channel?.id?.channelId}`} >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center"
                }}
            >
                <CardMedia 
                    image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    sx={{
                        borderRadius: "50%",
                        height: 180,
                        width: 180
                    }}
                />
            </CardContent>
        </Link>
    </Box>
    )
};

export default ChannelCard;