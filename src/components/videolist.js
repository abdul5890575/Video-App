import React from 'react';
import VideoItem from './Videoitem';
 
const VideoList=({videos,onVideoSelect})=>{
    const renderedlist= videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>;
    });
    
    return(
    <div className='ui relaxed divided list'>{renderedlist}</div>
    );
};

export default VideoList;