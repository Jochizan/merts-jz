import { Router } from 'express';

const router = Router();

// controllers
import * as videoCtrl from '../controllers/videos.controller'

router
  .get('/videos', videoCtrl.getVideos)
  .post('/videos', videoCtrl.createVideo);

router
  .get('/videos/:id', videoCtrl.getVideo)
  .delete('/videos/:id', videoCtrl.deleteVideo)
  .put('/videos/:id', videoCtrl.updateVideo);

export default router;