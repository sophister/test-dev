/**
 *
 * Created by Jess on 2018/6/25.
 */

'use strict';

import React, { Component } from 'react';

import DraggableComponent from '../DraggableComponent/DraggableComponent.js';

class ComponentList extends Component{

    render(){
        const { list = [] } = this.props;

        return list.map( (spec, index) => {
            return <DraggableComponent { ...spec } key={ index } />
        });
    }
}


export default ComponentList;

