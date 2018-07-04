/**
 *
 * Created by Jess on 2018/7/4.
 */

'use strict';

import React, { Component } from 'react';

import ComponentList from './ComponentList.js';
import Wrapper from './Wrapper.js';

export default class Editor extends Component{

  render(){
    return (
      <div className="editor-2">
        <ComponentList/>

      </div>
    );
  }
}


