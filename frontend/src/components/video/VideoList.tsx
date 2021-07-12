import { useEffect, useState } from 'react';
import { Video } from './Video';
import * as videoService from './VideoService';
import VideoItem from './VideoItem';

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await videoService.getVideos();
    const formatedVideos = res
      .map((video: Video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a: any, b: any) => b.createdAt.getTime() - a.createdAt.getTime());
    setVideos(formatedVideos);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className='row'>
      {videos.map((video) => (
        <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
      ))}
    </div>
  );
};

export default VideoList;
