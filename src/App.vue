<template>
  <div class="app-container">
    <!-- 背景图片 -->
    <div class="background-image"></div>

    <!-- 背景音乐 -->
    <audio autoplay loop>
      <source src="@/assets/background-music.mp3" type="audio/mpeg" />
      您的浏览器不支持音频播放。
    </audio>

    <!-- 导航栏 -->
    <nav class="navbar">
      <router-link to="/" class="nav-item">首页</router-link>
      <router-link to="/page1" class="nav-item">页面 1</router-link>
      <router-link to="/page2" class="nav-item">页面 2</router-link>
      <router-link to="/page3" class="nav-item">页面 3</router-link>
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
/* 背景图片样式 */
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/background-image.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
}

/* 导航栏样式 */
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.nav-item:hover {
  text-decoration: underline;
}
</style>
