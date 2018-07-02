/**
 *
 * Created by Jess on 2018/6/25.
 */

'use strict';

import React, { Component } from 'react';
import ComponentList from '../ComponentList/ComponentList.js';

import './Editor.css';


class Editor extends Component{

    constructor(){
        super();

        this.state = {
            components: [],
            all: []
        };
    }

    renderList(arr){
        arr = arr || [];

        return arr.map( (com, index) => {

        });
    }

    renderAvailableComponent(){
        const list = [
            {
                type: 'div',
                name: 'div容器',
                is_native: true,
                accept_child: true
            },
            {
                type: 'img',
                name: '图片',
                is_native: true
            }
        ];

        return <ComponentList list={ list } />
    }

    renderCanvas(){

    }

    render(){
        return (
            <div className="page-editor">
                <div className="page-canvas">
                    { this.renderList(this.state.components) }
                </div>
                <div className="side-bar">
                    { this.renderAvailableComponent() }
                </div>
            </div>
        );
    }
}


export default Editor;


