import React, { Component } from 'react';
import './App.css';
import puppies from '../data/puppy-data.js';
import sharks from '../data/shark-data.js';
import Creatures from '../Creatures/Creatures';
import Home from '../Home/Home';
import {
  BrowserRouter,
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreatureDetails from '../Creatures/CreatureDetails';


export default class App extends Component {
  findCreature(type, id) {
    const animals = type === 'puppies' ? puppies : sharks;
    const creatureToRender = animals.find(creature => creature.id === parseInt(id))
    return creatureToRender;
  }
  render() {
    return (
      <main className="App">
        <nav>
          <Link to="/puppies" className="nav">Puppies</Link>
          <a href="/sharks" className="nav">Sharks</a>
        </nav>
        <h1>Puppies or Sharks?</h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/puppies" render={() => <Creatures name="puppies" data={puppies} />} />
        <Route exact path="/sharks" render={() => <Creatures name="sharks" data={sharks} />} />
        <Route
          exact path='/:type/:id'
          render={({ match }) => {
            const { id, type } = match.params;
            return (
              <CreatureDetails {...this.findCreature(type, id)} />
            )
          }}
        />
      </main>
    );
  }
}
