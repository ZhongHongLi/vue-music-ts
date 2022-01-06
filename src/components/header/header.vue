<template>
  <div class="header_container">
    <el-row>
      1111111111
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
        <div>
          <div class="logo">
            <div class="iconfont icon-wangyiyunyinle"></div>
            <div class="logo_name">网易云音乐</div>
          </div>
          <div class="arrowbox">
            <div class="leftarrow iconfont icon-zuojiantou"></div>
            <div class="rightarrow iconfont icon-youjiantou1"></div>
          </div>
          <div class="search">
            <el-input></el-input>
          </div>
          <div class="mkf iconfont icon-maikefeng"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  toRefs,
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
} from "vue";
</script>

<style lang="scss" scoped>
.header_container {
  height: 100%;
}
</style>
