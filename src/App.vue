<template>
  <div class="app-container">
    <!-- 背景音乐 -->
    <audio autoplay loop>
      <source src="@/assets/background-music.mp3" type="audio/mpeg" />
      您的浏览器不支持音频播放。
    </audio>

    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-items"> <!-- 创建一个新的容器用于导航项 -->
        <router-link to="/" class="nav-item">主页</router-link>
        <router-link to="/page1" class="nav-item">回忆</router-link>
        <router-link to="/page2" class="nav-item">关于宝宝</router-link>
        <router-link to="/page3" class="nav-item">信</router-link>
      </div>
    </nav>

    <!-- 路由视图 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* 导航栏样式 */
.navbar {
  display: flex;
  justify-content: space-between;
  /* 将标题和导航项分开 */
  align-items: center;
  padding: 1rem;
  position: fixed;
  width: 95%;
  top: 0;
  z-index: 10;
  background-color: rgba(255, 249, 249, 0);
  /* 修改背景颜色为半透明 */
}

.navbar-title {
  color: #422a0c;
  font-size: 1.5rem;
  /* 可以根据需要调整标题大小 */
  font-weight: normal;
}

.nav-items {
  display: flex;
  /* 使用 flexbox 使导航项排列在一行 */
  gap: 1rem;
  /* 添加导航项之间的间距 */
}

.nav-item {
  color: #422a0c;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: normal;
}

.nav-item:hover {
  text-decoration: underline;
}
</style>
