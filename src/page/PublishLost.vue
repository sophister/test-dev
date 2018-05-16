<template>
  <div class="page-publish-lost">
    <h1>发布捡到的物品</h1>
    <div class="form-con">
      <el-form ref="form" label-width="80px">
        <el-form-item label="物品名">
          <el-input v-model="title" placeholder="输入捡到的物品名称"></el-input>
        </el-form-item>
        <el-form-item label="物品描述">
          <el-input type="textarea" v-model="desc"></el-input>
        </el-form-item>
        <el-form-item label="地点">
          <el-input v-model="location" placeholder="输入捡到的物品的地点"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="contact" placeholder="输入您的联系方式"></el-input>
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
    name: 'page-publish-lost',

    data(){
      return {
        title: '',
        desc: '',
        time: new Date(),
        location: '',
        contact: ''
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

        this.$store.dispatch('publishLost', {
          title: this.title,
          desc: this.desc,
          time: this.time.getTime(),
          location: this.location,
          contact: this.contact
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
