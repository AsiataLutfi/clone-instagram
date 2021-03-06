import React from 'react';

// Components
import Navbar from './components/Layouts/Navbar';
import SideContent from './components/Layouts/SideContent';
import Post from './components/Post/Post';
import Stories from './components/Story/Stories';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container mt-3">
        <div className="row">
          <div className="col col-lg-8 ">
            <Stories />
            <Post />
          </div>
          <div className="col-4 d-none d-lg-block">
            <SideContent />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
