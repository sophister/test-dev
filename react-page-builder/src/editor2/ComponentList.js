/**
 * 可供选择的组件列表
 * Created by Jess on 2018/7/4.
 */

'use strict';

import React, { Component } from 'react';
import * as Sortable from 'sortablejs';
import {observer, inject} from "mobx-react";

import './ComponentList.css';


@inject('componentFactory')
export default class ComponentList extends Component{

  componentDidMount(){
    Sortable.create(this.refs.list, {

      // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
      group: {
        name: 'ui',
        pull: 'clone',
        put: false
      },
      sort: false,  // sorting inside list
      draggable: 'j-draggable',

      setData:  (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) => {
        const { componentFactory } = this.props;
        const type = dragEl.getAttribute('data-type');
        const spec = componentFactory.getSpecification(type);
        dataTransfer.setData('componentSpec', {
          ...spec
        }); // `dataTransfer` object of HTML5 DragEvent
      },
    });
  }

  render(){
    return (
      <div className="component-list" ref="list">
        <button className="j-draggable" data-type="img">图片</button>
        <button className="j-draggable" data-type="div">div容器</button>
        <button className="j-draggable" data-type="Banner">轮播</button>
      </div>
    );
  }
};


