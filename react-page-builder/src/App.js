import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {observer, Provider} from "mobx-react";

import store from './store/index.js';


import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

import Editor from './component/Editor/Editor.js';

import Editor2 from './editor2/Editor.js';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Editor/>
//       </div>
//     );
//   }
// }
//
// export default DragDropContext(HTML5Backend)(App);



class App extends Component {
  render() {
    return (
      <Provider componentFactory={ store.componentFactory } builderStore={ store.builderStore } >
        <div className="App">
          <Editor2 />
        </div>
      </Provider>
    );
  }
}

export default App;

