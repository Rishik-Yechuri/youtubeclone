// VideoPlayer.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

type VideoPlayerParams = {
    videoId: string;
};

const VideoPlayer: React.FC = () => {
 //   alert('here')
    const { videoId } = useParams<VideoPlayerParams>();

    // Use the videoId as the video URL
    const videoUrl = videoId;

    return (
        <div>
            <h2>VideoPlayer</h2>
            <video src={videoUrl} controls></video>
        </div>
    );
};

export default VideoPlayer;
