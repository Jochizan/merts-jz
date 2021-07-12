import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// @types
import { Video } from './Video';

import { toast } from 'react-toastify';
import * as videoService from './VideoService';

type IntputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

const initialForm: Video = {
  title: '',
  description: '',
  url: '',
};

const VideoForm = () => {
  const history = useHistory();
  const params = useParams<Params>();

  const [form, setForm] = useState<Video>(initialForm);

  const handleChange = (e: IntputChange) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      const res = await videoService.createVideo(form);
      toast.success('Nuevo video agregado');
    } else {
      const res = await videoService.updateVideo(params.id, form);
      toast.warn('Video actualizado');
    }

    setForm(initialForm);
    history.push('/');
  };

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id);
    setForm(res);
  };

  useEffect(() => {
    if (params.id) {
      getVideo(params.id);
    }
  }, [params.id]);

  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <div className='card'>
          <div className='card-body'>
            {params.id ? <h3>Update Video</h3> : <h3>New Video</h3>}
            <form onSubmit={handleSubmit}>
              <div className='form-group p-2'>
                <label htmlFor='title'>Titulo</label>
                <input
                  type='text'
                  name='title'
                  placeholder='Escribe el titulo del video'
                  className='form-control'
                  onChange={handleChange}
                  value={form.title}
                  autoFocus
                />
              </div>

              <div className='form-group p-2'>
                <label htmlFor='url'>URL</label>
                <input
                  type='text'
                  name='url'
                  placeholder='https://somesite.com'
                  className='form-control'
                  onChange={handleChange}
                  value={form.url}
                />
              </div>

              <div className='form-group d-flex flex-column p-2'>
                <label htmlFor='description'>Descripción</label>
                <textarea
                  name='description'
                  rows={3}
                  placeholder='Escribe una descripción'
                  className='form-control'
                  onChange={handleChange}
                  value={form.description}
                />
              </div>
              {params.id ? (
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-info'>Update Video </button>
                </div>
              ) : (
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-primary'>Create video</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
