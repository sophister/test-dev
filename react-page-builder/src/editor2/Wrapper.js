/**
 *
 * Created by Jess on 2018/7/2.
 */

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {observer, inject} from "mobx-react";
import * as Sortable from 'sortablejs';

@inject('builderStore')
@observer
export default class Wrapper extends Component{

  constructor(props){
    super(props);

  }

  componentDidMount(){
    const el = ReactDOM.findDOMNode(this);
    Sortable.create(el, {

      animation: 50,
      // 放在一个组里,可以跨组拖拽
      group: {
        name: 'ui',
        pull: true,
        put: true
      },

      draggable: 'j-draggable',

      onAdd(e){
        console.log('onAdd', e);
      },

      onUpdate(e){
        console.log('onUpdate', e);
      },

      onRemove(e){
        console.log('onRemove', e);
      }

    });
  }

  render(){
    return this.props.children;
  }
}


