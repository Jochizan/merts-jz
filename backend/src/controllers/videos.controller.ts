import { RequestHandler } from 'express';
import Video from '../models/Video';

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url })

  if (videoFound) {
    return res.status(301).json({ message: 'The URL already exists' })
  }

  const video = new Video(req.body);
  console.log(video);

  const savedVideo = await video.save();
  res.status(200).json(savedVideo);
}

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.json(err);
  }
}

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);

  if (!videoFound) {
    return res.status(204).json({ msg: 'Not Found' });
  }

  res.json(videoFound);
}

export const deleteVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findByIdAndDelete(req.params.id);

  if (!videoFound) {
    return res.status(204).json({ msg: 'Not Found' });
  }
  
  res.json(videoFound);
}

export const updateVideo: RequestHandler = async (req, res) => {
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!videoUpdated) {
    return res.status(204).json({ msg: 'Not Found' });
  }

  res.json(videoUpdated);
}
