<template>
    <div class="home-page-container">
        <!-- 背景图片容器 -->
        <div class="background-image"></div>

        <div class="home-container">
            <h1>宝宝21岁生日快乐！</h1>
            <p>
                希望宝宝新的一岁天天开心哦<br />
                陪我的宝宝长大了一岁呢<br />
                很开心能遇见宝宝的20岁<br />
                我要一直一直陪你走下去……<br />
            </p>
            <!-- 跳转到 Page1 的按钮 -->
            <button @click="goToPage1" class="nav-button">点我啦</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        goToPage1() {
            // 使用 Vue Router 跳转到 page1
            this.$router.push('/page1');
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.home-page-container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    /* 防止内容溢出 */
}

.background-image {
    background-image: url('@/assets/page-background.jpg');
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    /* 设置透明度 */
    z-index: 1;
    /* 背景图片在最底层 */
}

.home-container {
    position: relative;
    z-index: 2;
    /* 确保内容显示在背景图片上方 */
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px;
    text-align: center;
    padding: 50px 20px;
    /* 调整内边距，避免内容紧贴顶部 */
}

h1 {
    color: #422a0c;
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    color: #181005;
    line-height: 1.6;
    margin-bottom: 2rem;
    margin: 0 20px;
    width: auto;
    word-wrap: break-word;
    white-space: normal;
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
