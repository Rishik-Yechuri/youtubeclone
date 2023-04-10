import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VideoList.css";

type Video = {
    thumbnail: string;
    title: string;
    creator: string;
    views: number;
    timePosted: string;
    videoLink: string;
};

const VideoList: React.FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const fetchVideos = async () => {
        const bucketName = "videobucket420";
        const apiKey = "AIzaSyCbZ8yPmIAtWbs4rXR0U-1ojtY0L0JQiws";

        const response = await fetch(
            `https://www.googleapis.com/storage/v1/b/${bucketName}/o?key=${apiKey}`
        );
        const data = await response.json();

        const videoItems = data.items.filter((item: any) => item.name.endsWith(".mp4"));

        const videoObjects: Video[] = videoItems.map((item: any) => {
            const metadata = item.metadata || {};
            const videoLink = `https://storage.googleapis.com/${bucketName}/${item.name}`;

            return {
                thumbnail: metadata.mediaLink || "https://via.placeholder.com/150",
                title: metadata.title || "Unknown Title",
                creator: metadata.creator || "Unknown Creator",
                views: metadata.views || 0,
                timePosted: metadata.timePosted || "Unknown Time",
                videoLink: videoLink,
            };
        });

        setVideos(videoObjects);
    };

    useEffect(() => {
        fetchVideos().then((r) => {});
    }, []);

    return (
        <div className="video-list">
            {videos.map((video, index) => (
                <Link key={index} to={`/video/${encodeURIComponent(video.videoLink)}`} className="video-link">
                    <div className="video-item">
                        <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                        <div className="video-info">
                            <h3>{video.title}</h3>
                            <p>{video.creator}</p>
                            <div id={"viewsAndTime"}>
                                <p>{video.views} views |&nbsp;</p>
                                <p>{video.timePosted}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default VideoList;
