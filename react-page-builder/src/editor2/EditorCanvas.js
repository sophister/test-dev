/**
 *
 * Created by Jess on 2018/7/2.
 */

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {observer, inject} from "mobx-react";
import * as Sortable from 'sortablejs';

import Wrapper from './Wrapper.js';

@inject('builderStore')
@observer
export default class EditorCanvas extends Component{

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
    const { builderStore } = this.props;
    const emptyTip = builderStore.isEmpty ? <div className="empty-tip">拖拽组件到这里</div> : null;
    const childs = builderStore.childs || [];
    const arr = childs.map( (obj, index) => {
      let element = null;
      if( obj.isNative ){
        element = React.createElement(obj.type, {
          style: obj.style,
          data: obj.data
        });
      }
      if( element ){
        return (
          <Wrapper key={ obj.cid }>
            { element }
          </Wrapper>
        );
      }
      return null;
    });
    return (
      <div className="editor-canvas">
        { emptyTip }
        { arr }
      </div>
    );
  }
}


