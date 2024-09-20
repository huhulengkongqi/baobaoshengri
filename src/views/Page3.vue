<template>
    <div class="home-page-container">
        <!-- 背景图片容器 -->
        <div class="background-image"></div>

        <div class="home-container">
            <h1>写给我亲爱的宝宝：</h1>
            <p>宝宝21岁生日快乐！<br /></p>

            <p>这是我第一次用心准备生日礼物，时间仓促也不知道准备的怎么样（敲打）想给宝宝一个别人给不了的礼物（第一次给礼物送重复了太气了），所以就想到写个网站，但感觉很多想要的效果还是没有实现。我这几天说的自己的项目就是这个呀，我哪那么多要忙的呀，感觉呆呆宝宝猜出来了hhh。网站是有bgm的，手机放不出来可以试试Chrome呀，特意为宝宝找的happy
                bgm嘿嘿嘿。<br /></p>

            <p>在和宝宝在一起之后，我逐渐不再像之前那样凡事都不在乎的样子了。我开始褪下了那层名为“情绪稳定”的面具和保护色，重新变成那个有话直说的孩子，我可以在宝宝的肩膀上哭，我可以随时分享让我开心的事和飘散的思绪并收获相似的脑电波，我可以不用一个人承担情绪。我不知道这样是不是好的变化，但是我比以前轻松了很多，谢谢宝宝一直的陪伴！<br />
            </p>
            <p>我看到小红书上说，如果一个男生无限地对女生好，把最温柔最幼稚的一面都给她，每天黏着她，注定会输的很惨。但是我还是愿意如此，我相信宝宝，也一直喜欢着宝宝，我不喜欢对你有任何隐瞒，我就是我，会让你看到我全部本来的样子。
                <br />
            </p>
            <p>请原谅我使用这种方式给你写信，我自知手写字写不好看就想着扬长避短嘛，手写的部分少写一点。但是我还是高估了自己的水平。但是没关系，这个网站是一个长期的项目，我以后也可以接着做，做完了效果就会直接呈现在网站上，会一直记录我们之间的回忆，记录这个To
                be continue的故事！
                <br />
            </p>
            <p>网站第一版的设想是做一个宝宝每天给树浇水的效果，但是树成长的渲染效果太难做了，对美术要求很高，而且想着给宝宝多一个每天打卡的任务多不好。第二版是想把浇水做成每天记录一件开心的事，然后可以储存在网站上面，可惜我低估了在一个网站上储存一些东西的难度，因为这涉及到数据库，可能需要去学习一些软工的知识之后才能做。我尝试了找了免费的挂载平台和数据库网站，但在修复bug的过程中，在上课的时候由于把错误的东西放到了github上删不掉然后全毁了（哭死），虽然本来就bug多多（敲打）。然后全部推倒重来。
                <br />
            </p>
            <p>预计后续再增加的功能：地图显示我们去过的地方做过的事、种一颗爱情树等等，宝宝想到什么都可以跟我说哦！
                <br />
            </p>
            <p>晚上翻来覆去在床上睡不着想了很多话想和宝宝说，但是写到纸上却发现写不了多少，因为很多平时想到都和宝宝说啦。说是这么说，感觉自己没写多少，但写完这句看了下也有快1000字了hhh。
                <br />
            </p>
            <p>那就再次祝宝宝每天都要快乐啦，希望宝宝心中所想都能成为现实！
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    methods: {
        goToPagehome() {
            this.$router.push('/');
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
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
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
    text-indent: 2em;
}

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