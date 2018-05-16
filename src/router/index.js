import Vue from 'vue';
import Router from 'vue-router';
import PublishLost from '@/page/PublishLost';
import LostList from '@/page/LostList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/publishLost',
      name: 'PublishLost',
      component: PublishLost,
    },
    {
      path: '/lostList',
      name: 'LostList',
      component: LostList,
      alias: '/',
    },
  ],
});
