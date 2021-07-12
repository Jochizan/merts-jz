import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import VideoForm from './components/video/VideoForm';
import VideoList from './components/video/VideoList';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container p-4'>
        <Switch>
          <Route exact path='/' component={VideoList} />
          <Route path='/new-video' component={VideoForm} />
          <Route path='/update/:id' component={VideoForm} />
        </Switch>
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
