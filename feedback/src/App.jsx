import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import About from './router/About';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<About />} />
            {/* exaple of using params */}
            <Route path='/post/*' element={<Post />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
