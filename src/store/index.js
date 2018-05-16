/**
 *
 * Created by Jess on 2018/5/15.
 */

'use strict';


import Vue from 'vue';
import Vuex from 'vuex';

import * as data from '@/data/data.js';

Vue.use(Vuex);


const store = new Vuex.Store({

  state: {
    isLoading: false,
    lostList: []
  },

  mutations: {
    setLostList(state, list){
      state.lostList = list || [];
    },

    updateLoadStatus(state, isLoading){
      state.isLoading = isLoading;
    }
  },

  actions: {

    //发布捡到的物品
    publishLost({commit, state}, args){
      return data.call({ funcName: 'onPost', args : [ args.title, args.desc, args.time, args.location, args.contact ]});
    },

    //查询丢失的物品列表
    fetchLostList({commit, state}, args){
      return data.simulateCall({ funcName: 'listPost', args: []})
        .then( (out) => {
          commit('setLostList', state.lostList.concat(out.online));
        });
    }
  }
});



export default store;

