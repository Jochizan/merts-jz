import './db';
import app from './index';
import config from './config';
import videoRoutes from './routes/video.routes';

app.set('PORT', config.PORT);

app.use('/videos', videoRoutes);

app.listen(app.get('PORT'), () => {
  console.log('Server listen on http://localhost:' + app.get('PORT'));
})