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
    lostList: [],
    rewardList: [],
    //我发布的捡到物品列表
    myLostList: [],
    //我发布的悬赏列表
    myRewardList: [],
  },

  mutations: {
    setLostList(state, list){
      state.lostList = list || [];
    },

    updateLoadStatus(state, isLoading){
      state.isLoading = isLoading;
    },

    setRewardList(state, list){
      state.rewardList = list || [];
    },

    setMyLostList(state, list){
      state.myLostList = list || [];
    },

    setMyRewardList(state, list){
      state.myRewardList = list || [];
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
    },

    //发布失物招领
    publishReward({commit, state}, args){
      return data.call({ funcName: 'onReward', args : [ args.title, args.desc, args.time, args.location, args.contact, args.money ]});
    },

    //查询悬赏列表
    fetchRewardList({commit, state}, args){
      return data.simulateCall({ funcName: 'listReward', args: []})
        .then( (out) => {
          commit('setRewardList', state.rewardList.concat(out.online));
        });
    },

    //获取当前用户发布的列表，包含捡到和悬赏
    fetchMyList({commit, state}, args){
      return data.simulateCall({ funcName: 'findMyPost', args: []})
        .then( (out) => {
          commit('setMyRewardList', state.myRewardList.concat(out.reward || []));
          commit('setMyLostList', state.myLostList.concat(out.post || []));
        });
    },

    //下线捡到的物品
    offLost({commit, state}, args){
      return data.call({ funcName: 'offPost', args : [ args.id ]}).then( (out) => {
        state.myLostList.forEach( (obj) => {
          if( obj.id === args.id ){
            obj.status = 2;
          }
        });
        return out;
      });
    },

    //下线悬赏的物品
    offReward({commit, state}, args){
      return data.call({ funcName: 'offReward', args : [ args.id ]}).then( (out) => {
        state.myRewardList.forEach( (obj) => {
          if( obj.id === args.id ){
            obj.status = 2;
          }
        });
        return out;
      });
    },
  }
});



export default store;

