import React, { Component } from 'react';
import './app.css';

import Header from './header';
import DogCard from './dog_card';

const App = ({breeds}) => {
    return (
      <div className="app-container">
        <Header />
        <div className="body-container">
        {
            breeds.map(breed => (
            <DogCard
                key={breed.name}
                name={breed.name}
                picture={breed.picture}
                description={breed.description}
            />
            ))
        }
        </div>
      </div>
    );
}

export default App;