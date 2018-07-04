/**
 * 内部保存所有的组件及其对应的specification
 * Created by Jess on 2018/7/4.
 */

'use strict';

const specification = {
  img: {
    isNative: true,
    type: 'img',
    name: '图片',
    style: {},
    data: {},
    acceptChild: false,
  },

  div: {
    isNative: true,
    type: 'div',
    name: 'div容器',
    style: {},
    data: {},
    acceptChild: true,
  },

  'Banner': {
    isNative: false,
    type: 'Banner',
    name: '图片轮播',
    style: {},
    data: {},
    acceptChild: false,
  }
};

class ComponentFactory {

  constructor(){

  }

  getSpecification(type){
    const data = specification[type];
    return data ? Object.assign({}, data) : null;
  }
}


export default new ComponentFactory();

