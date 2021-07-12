import { Video } from './Video';

const API = process.env.REACT_APP_API;

export const getVideos = async () => {
  const res = await fetch(`${API}`);
  return await res.json();
};

export const createVideo = async (video: Video) => {
  return await fetch(`${API}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(video),
  });
};

export const getVideo = async (id: string) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const updateVideo = async (id: string, video: Video) => {
  const res = await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(video),
  });
  return await res.json();
};

export const deleteVideo = async (id: string) => {
  return await fetch(`${API}/${id}`, {
    method: 'DELETE',
  });
};
