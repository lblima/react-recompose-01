import React from 'react';
import './app.css';

import Header from './header';
import DogCard from './dog_card';
import Spinner from './spinner';

import { branch, renderComponent } from 'recompose';

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

const enhance = branch(
      (props) => props.breeds.length === 0,
      renderComponent(Spinner)
    );
  
  export default enhance(App);