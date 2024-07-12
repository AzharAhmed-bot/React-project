import React, { useEffect, useRef } from "react";

const VideoComponent = ({ videoSrc }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        video.muted = true;
        video.play();
    }, []);

    return (
        <video ref={videoRef} src={videoSrc} controls />
    );
};

export default VideoComponent;
