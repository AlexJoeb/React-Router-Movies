import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    if(!savedList.find(item => item.id === movie.id)){
      // Not already in list.
      setSavedList([...savedList, movie]);
    } else return;
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' render={(props) => <MovieList {...props} addToSavedList={addToSavedList} />} />
      <Route path='/movies/:id' render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
