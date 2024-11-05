<template>
  <el-container>
    <!-- 导航栏 -->
    <el-header>
      <el-row type="flex" justify="space-between" align="middle">
        <div class="logo">
          <h1> 纳仓ERP </h1>
        </div>
        <el-menu :default-active="activeMenu" mode="horizontal" router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/pricing">定价</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </el-row>
    </el-header>

    <!-- 主内容 -->
    <el-main>
      <router-view />
    </el-main>

    <!-- 页脚 -->
    <el-footer>
      <p>© 2024 纳仓ERP。保留所有权利。</p>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  computed: {
    activeMenu() {
      return this.$route.path;
    },
  },
};
</script>

<style>
.logo {
  font-size: 24px; /* 调整文字大小 */
  color: #409EFF; /* 设置文字颜色 */
}

.logo a {
  color: #409EFF;
  text-decoration: none;
}

.logo a:hover {
  color: #409EFF;
}
</style>
