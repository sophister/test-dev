<template>
  <div class="page-lost-list">
    <h1>捡到的物品列表</h1>
    <div class="list-con">
      <el-table
        :data="this.$store.state.lostList"
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
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'page-lost-list',

    created(){
      this.$store.dispatch('fetchLostList');
    },

    methods: {

    }
  };
</script>
