/**
 * 整个页面编辑相关的数据
 * Created by Jess on 2018/7/4.
 */

'use strict';

import { observable, computed, action } from "mobx";
import util from '@/util/util.js';

export default class BuilderStore {

  @observable childs = [];
  @observable nodeMap = {};

  @computed get isEmpty(){
    return this.childs.length < 1;
  }

  @action
  insertNode(data, index){
    if( data.cid ){
      //移动界面上的组件
      if( data.parentCid ){
        const parentComponent = this.nodeMap[data.parentCid];
        const oldIndex = parentComponent.childs.indexOf(data.cid);
        if( oldIndex >= 0 ){
          parentComponent.childs.splice(oldIndex, 1);
        }
        this.childs.splice(index, 0, data);
      }
    }else{
      let instance = { ...data, cid: util.generateComponentId(), parentCid: null};
      this.childs.push(instance);
    }
  }
}


