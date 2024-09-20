<template>
    <div class="home-page-container">
        <!-- 背景图片容器 -->
        <div class="background-image"></div>

        <div class="home-container">
            <h1>宝宝在我眼中是这样的：</h1>
            <p>
                · 永远可爱好看的宝宝<br />
                · 总是知道我在想什么<br />
                · 一直能在我失落的时候理解我的心情<br />
                · 什么开心的事都愿意跟我分享<br />
                · 很对我的脑回路hhh<br />
                · 有话愿意直说<br />
                · 一直很可靠<br />
                · 信任我，我也一直愿意信任的人<br />
                · 有的时候有一些我很喜欢的小任性hhh<br />
                · 最重要的：对我特别特别好！
            </p>
            <!-- 跳转到 Page1 的按钮 -->
            <button @click="goToPage3" class="nav-button">我想对宝宝说</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        goToPage3() {
            // 使用 Vue Router 跳转到 page1
            this.$router.push('/page3');
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.home-page-container {
    position: relative;
    /* 使背景和内容能够相对定位 */
    width: 100%;
    height: auto;
}

.background-image {
    background-image: url('@/assets/background-image.jpg');
    background-size: auto;
    /* 保持图片原始比例 */
    background-position: center top;
    /* 背景图片居中并从顶部开始 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    position: absolute;
    /* 绝对定位 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    /* 设置透明度 */
    z-index: 1;
    /* 背景在下方 */
}

.home-container {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* 垂直居中 */
    align-items: center;
    /* 水平居中 */
    height: 100vh;
    text-align: left;
    position: relative;
    /* 相对定位以覆盖背景 */
    z-index: 2;
    /* 内容在上方 */
    padding-top: 20px;
    /* 添加顶部内边距 */
}

h1 {
    color: #422a0c;
    /* 金色 */
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    color: #1b1105;
    /* 橙色 */
    line-height: 1.6;
    margin-bottom: 2rem;
}

/* 跳转按钮样式 */
.nav-button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.nav-button:hover {
    background-color: #45a049;
}
</style>
