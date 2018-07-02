/**
 * 根据组件的JSON配置，渲染对应的真实组件
 * Created by Jess on 2018/6/25.
 */

'use strict';

import React, { Component } from 'react';


export default class ComponentHolder extends Component{

    render(){
        const { spec } = this.props;

        if( spec.is_native ){
            return React.createElement(spec.type, this.props, this.props.children);
        }
    }

}

