import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Box } from "@mui/material"

import { colors } from './utils/constants';

import Navbar from "./components/Navbar"
import Feed from "./components/Feed"
import VideoDetail from "./components/VideoDetail"
import ChannelDetail from "./components/ChannelDetail"
import SearchFeed from "./components/SearchFeed"

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: colors.black }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:id" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;<h1>Mon app</h1>