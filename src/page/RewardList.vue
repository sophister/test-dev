<template>
  <div class="page-reward-list">
    <div class="op-bar">
      <el-button type="primary" @click="dialogFormVisible = true">发布悬赏</el-button>
    </div>
    <h1>悬赏列表</h1>
    <div class="list-con">
      <el-table
        :data="this.$store.state.rewardList"
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
      </el-table>
    </div>
    <el-dialog title="发布悬赏" :visible.sync="dialogFormVisible">
      <publish-reward @submit="submit"></publish-reward>
    </el-dialog>
  </div>
</template>

<script>

  import PublishReward from '@/component/PublishReward.vue';

  export default {

    name: 'page-reward-list',

    components: {
      PublishReward
    },

    data(){
      return {
        dialogFormVisible: false
      };
    },

    created(){
      this.$store.commit('setRewardList', []);
      this.$store.dispatch('fetchRewardList');
    },

    methods: {

      submit(data){
        if( this.$store.state.isLoading ){
          return;
        }

        this.$store.dispatch('publishReward', data).then( (out) => {
          this.dialogFormVisible = false;
          this.$message({
            message: '提交数据成功，请稍后刷新',
            type: 'success'
          });
        }).catch( (err) => {
          console.error(err);
          this.$message.error('提交失败');
        });
      }
    }
  };
</script>

<style lang="scss" scoped="">
  .page-reward-list{
    .op-bar{
      margin: 25px auto;
    }
  }
</style>
