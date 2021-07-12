import { Router } from 'express';

const router = Router();

// controllers
import * as videoCtrl from '../controllers/videos.controller'

router
  .get('/', videoCtrl.getVideos)
  .post('/', videoCtrl.createVideo);

router
  .get('/:id', videoCtrl.getVideo)
  .delete('/:id', videoCtrl.deleteVideo)
  .put('/:id', videoCtrl.updateVideo);

export default router;