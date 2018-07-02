import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import Editor from './component/Editor/Editor.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
