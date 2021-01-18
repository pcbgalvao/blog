import React from 'react';
import PostList from './PostList';

import axios from 'axios';
import thunk from 'redux-thunk';

const App = () => {

  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;