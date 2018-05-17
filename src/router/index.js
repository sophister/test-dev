import Vue from 'vue';
import Router from 'vue-router';
import PublishLost from '@/page/PublishLost';
import LostList from '@/page/LostList';
import PublishReward from '@/page/PublishReward';
import RewardList from '@/page/RewardList';
import MyList from '@/page/MyList';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/publishLost',
    //   name: 'PublishLost',
    //   component: PublishLost,
    // },
    {
      path: '/lostList',
      name: 'LostList',
      component: LostList,
      alias: '/',
    },
    // {
    //   path: '/publishReward',
    //   name: 'PublishReward',
    //   component: PublishReward,
    // },
    {
      path: '/rewardList',
      name: 'RewardList',
      component: RewardList,
    },
    {
      path: '/myList',
      name: 'MyList',
      component: MyList
    }
  ],
});
