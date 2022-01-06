<template>
  <div class="container">
    <el-container>
      <el-header width="100%" height="70px" :style="{ 'background-color': primaryColor }">
        <el-row>
          <el-col :span="12">
            <div class="flex headerheight">
              <div class="logo flex">
                <div class="iconfont icon-wangyiyunyinle logos"></div>
                <div class="logo_name">网易云音乐</div>
              </div>
              <div class="arrowbox flex">
                <div class="leftarrow">
                  <i class="iconfont icon-zuojiantou"></i>
                </div>
                <div class="rightarrow">
                  <i class="iconfont icon-youjiantou1"></i>
                </div>
              </div>
              <div class="search">
                <el-input v-model="inputvalue"></el-input>
              </div>
              <div class="mkf_box">
                <div class="mkf">
                  <i class="iconfont icon-maikefeng"></i>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="right_action">
              <div @click="showThemeDialog">
                <i class="iconfont icon-pifu" title="换肤"></i>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <div class="middle" style="height: calc(100% - 70px);">
        <el-tabs :tab-position="tabPosition" >
          <el-tab-pane label="发现音乐">

          </el-tab-pane>
          <el-tab-pane label="博客">博客</el-tab-pane>
          <el-tab-pane label="视频">视频</el-tab-pane>
          <el-tab-pane label="朋友">朋友</el-tab-pane>
          <el-tab-pane label="直播">直播</el-tab-pane>
          <el-tab-pane label="私人FM">私人FM</el-tab-pane>
        </el-tabs>
      </div>
      <el-footer>Footer</el-footer>
    </el-container>
    <el-dialog center v-model="dialogVisible" :title="切换主题" width="400px">
      <el-form :model="colors" ref="form" class="theme-form" label-position="top" label-width="70px">
        <el-form-item :label="主题色" prop="primary">
          <el-color-picker v-model="colors.primary"></el-color-picker>
        </el-form-item>
        <el-form-item class="color-buttons">
          <el-button type="primary" @click="submitForm">切换 </el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import header from "@/components/header/header.vue";
import {
  reactive,
  toRefs,
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
} from "vue";
let colors = reactive({
  primary: "",
});
let inputvalue = ref("");
let primaryColor = ref("#F52121");
let dialogVisible = ref(false);
const tabPosition = ref('left')
const showThemeDialog = () => {
  dialogVisible.value = true;
};

const submitForm = () => {
  primaryColor.value = colors.primary;
  dialogVisible.value = false;
};

const resetForm = () => {
  primaryColor.value = "#F52121";
  dialogVisible.value = false;
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

.middle {
  display: flex;
}

.flex {
  display: flex;
}

.headerheight {
  height: 70px;
  line-height: 70px;
}

.logo {
  margin-right: 50px;
  .logos {
    font-size: 50px;
  }

  .logo_name {
    color: rgba(255, 255, 255, 0.6);
    font-size: 26px;
  }
}

.arrowbox {
  height: 70px;
  display: flex;
  align-items: center;
  .leftarrow,
  .rightarrow {
    background-color: rgb(230, 84, 84);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    color: rgb(249, 213, 213);
  }

  .rightarrow {
    margin-left: 10px;
    margin-right: 10px;
  }
}

::v-deep .el-input__inner {
  border-radius: 30px;
  background-color: #ef5858;
  border: 0px;
}

.mkf_box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 10px;
  .mkf {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(230, 84, 84);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    i {
      color: rgb(249, 213, 213);
    }
  }
}
i {
  color: rgb(249, 213, 213);
}

/deep/ el-tabs__header{
    width: 200px;
}
</style>
