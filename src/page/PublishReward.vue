<template>
  <div class="page-publish-lost">
    <h1>发布失物招领</h1>
    <div class="form-con">
      <el-form ref="form" label-width="80px">
        <el-form-item label="物品名">
          <el-input v-model="title" placeholder="输入丢失的物品名称"></el-input>
        </el-form-item>
        <el-form-item label="物品描述">
          <el-input type="textarea" v-model="desc"></el-input>
        </el-form-item>
        <el-form-item label="地点">
          <el-input v-model="location" placeholder="输入丢失物品的地点"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker type="datetime" placeholder="选择日期时间" v-model="time" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="contact" placeholder="输入您的联系方式"></el-input>
        </el-form-item>
        <el-form-item label="悬赏金额">
          <el-input v-model="money" placeholder="输入您的悬赏金额"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-publish-reward',

    data(){
      return {
        title: '',
        desc: '',
        time: new Date(),
        location: '',
        contact: '',
        money: 0
      };
    },

    computed:{
      canSubmit(){
        return ! this.$store.state.isLoading;
      }
    },

    methods: {

      submit(){
        if( this.$store.state.isLoading ){
          return;
        }

        this.$store.dispatch('publishReward', {
          title: this.title,
          desc: this.desc,
          time: this.time.getTime(),
          location: this.location,
          contact: this.contact,
          money: this.money
        }).catch( (err) => {
          console.error(err);
        });
      }
    }
  }
</script>

<style lang="scss" scoped="">
  .page-publish-lost{
    width: 800px;
    margin: 50px auto;
  }
</style>
