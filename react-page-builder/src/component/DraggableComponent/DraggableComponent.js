/**
 *
 * Created by Jess on 2018/6/25.
 */

'use strict';

import React, { Component } from 'react';
import { DragSource } from 'react-dnd';


const spec = {

    beginDrag(props, monitor, component){

        console.log(`beginDrag`, props, monitor, component);

        return {
            //组件实例的ID
            cid: props.cid,
            //父级组件实例的ID。
            parent_id: props.parent_id,
            //组件惟一类型标记，也是组件的 tag name
            type: props.type,
            //是否react原生组件
            is_native: props.is_native,
            //自定义样式
            style: props.style,
            //组件名
            name: props.name

        };
    },

    endDrag(props, monitor, component){
        console.log(`endDrag`, props, monitor, component);
    }
};


function collect(connect, monitor){
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}

class DraggableComponent extends Component{

    render(){
        // These props are injected by React DnD,
        // as defined by your `collect` function above:
        const { isDragging, connectDragSource } = this.props;

        return connectDragSource(
            <button>{ this.props.name }</button>
        );
    }
}


export default DragSource('ui', spec, collect)(DraggableComponent);


