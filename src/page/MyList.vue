<template>
  <div class="page-my-list">
    <h1>我发布的</h1>
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="捡到物品列表" name="lostList">
        <div class="list-con">
          <el-table
            :data="this.$store.state.myLostList"
            border
            stripe
            style="width: 100%">
            <el-table-column
              label="日期"
              width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ new Date(scope.row.time).toLocaleString() }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="title"
              label="物品名称"
              width="200">
            </el-table-column>
            <el-table-column
              label="描述信息"
            >
              <template slot-scope="scope">
                <pre>{{ scope.row.describe }}</pre>
              </template>
            </el-table-column>
            <el-table-column
              prop="location"
              label="地点"
              width="180">
            </el-table-column>
            <el-table-column
              prop="concact"
              label="联系方式">
            </el-table-column>
            <el-table-column
              label="操作"
            >
              <template slot-scope="scope">
                <el-button v-if="scope.row.status === 1" type="warning" @click="offLost(scope.row.id)">下线</el-button>
                <div v-else=""> -- </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="悬赏列表" name="rewardList">
        <div class="list-con">
          <el-table
            :data="this.$store.state.myRewardList"
            border
            stripe
            style="width: 100%">
            <el-table-column
              label="日期"
              width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ new Date(scope.row.time).toLocaleString() }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="title"
              label="物品名称"
              width="200">
            </el-table-column>
            <el-table-column
              label="描述信息"
            >
              <template slot-scope="scope">
                <pre>{{ scope.row.describe }}</pre>
              </template>
            </el-table-column>
            <el-table-column
              prop="location"
              label="地点"
              width="180">
            </el-table-column>
            <el-table-column
              prop="concact"
              label="联系方式">
            </el-table-column>
            <el-table-column
              prop="money"
              label="悬赏金额">
            </el-table-column>
            <el-table-column
              label="操作"
            >
              <template slot-scope="scope">
                <el-button v-if="scope.row.status === 1" type="warning" @click="offReward(scope.row.id)">下线</el-button>
                <div v-else=""> -- </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'page-my-list',

    data(){
      return {
        activeTab: 'lostList'
      };
    },

    created(){
      this.refreshData();
    },

    methods: {

      refreshData(){
        this.$store.commit('setMyLostList', []);
        this.$store.commit('setMyRewardList', []);
        this.$store.dispatch('fetchMyList');
      },

      handleClick(){},

      offLost(id){
        this.$store.dispatch('offLost', { id: id});
      },

      offReward(id){
        this.$store.dispatch('offReward', { id: id});
      }
    }

  };
</script>

<style lang="scss" scoped="">
  .page-my-list{

  }
</style>
