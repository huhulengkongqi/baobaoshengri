<template>
    <div class="home-page-container">
        <div class="background-image"></div>

        <div class="home-container">
            <h1>我们的回忆</h1>

            <div class="slider">
                <div class="slide" v-for="(item, index) in slides" :key="index" v-show="currentSlide === index" >
                    <img :src="item.image" alt="幻灯片图片" class="slide-image" />
                    <p class="slide-text">{{ item.text }}</p>
                </div>
            </div>
            <div class="navigation">
                <button @click="prevSlide" class="nav-button">上一张</button>
                <button @click="nextSlide" class="nav-button">下一张</button>
            </div>
            <button @click="goToPage2" class="nav-button">看完继续点我啦</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageOne',
    data() {
        return {
            currentSlide: 0,
            slides: [
                { image: require('@/assets/image1.png'), text: '2023/12/17 我们在一起啦！   因为快要寒假了，怕我们的关系没有后续，我略带一些莽撞和焦急地表了白，没想到某人心里也有点想法hhh' },
                { image: require('@/assets/image2.jpg'), text: '是哪个大坏蛋大二上学期期末复习的时候，穿光腿神器给从来没有近距离接触过女生的我极大的诱惑[○･｀Д´･ ○]  想念没有车的时候两个人复习周天天走一公里' },
                { image: require('@/assets/image3.jpg'), text: '我感冒了也要和我一起回我高中参加艺术节，还被看到了高中的黑历史形象o(╥﹏╥)o' },
                { image: require('@/assets/image6.jpg'), text: '宝宝临回家前和我去安吉hhh  终于不是我一个人和zqc一对去旅游了！(*^▽^*)' },
                { image: require('@/assets/image7.png'), text: '年前，就十几天两个人都想念对方想得不行，偷偷记录了一下可爱的双马尾(*￣3￣)' },
                { image: require('@/assets/image8.jpg'), text: '来沈阳找宝宝啦！(*^▽^*)好美的背影，记录一下嘿嘿' },
                { image: require('@/assets/image9.jpg'), text: '在沈阳赶上的一场雪！！他朝若是同淋雪，此生也算共白头！！' },
                { image: require('@/assets/image10.jpg'), text: '终于过完年见面啦，真是一刻也异地不下去了！这张在水族馆，约会圣地之一哦！与之并论的是电影院和摩天轮！' },
                { image: require('@/assets/image11.jpg'), text: '合肥邓紫棋演唱会！最开心的莫过于人生第一次看演唱会就是和宝宝一起（好像还有一个拖油瓶hhh先不管）！' },
                { image: require('@/assets/image13.jpg'), text: '双人成行！！最喜欢的双人游戏，别的游戏都没有这种感觉了。这一张是一起在鲸鱼背上翱翔，超级喜欢这个画面，对蓝色的梦幻的没有抵抗力' },
                { image: require('@/assets/image14.jpg'), text: '这一次宝宝抓了一把娃娃！也算是报了在一起之前有一次一只都没抓到的仇hhh' },
                { image: require('@/assets/image15.jpg'), text: '我的生日！海底捞工作人员出来的时候真的超级感动的o(╥﹏╥)o我完全没想到是我！' },
                { image: require('@/assets/image16.jpg'), text: '在南京听周深场外！明明很热还没有听见什么，但俩人就是很开心！' }
            ],
        };
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            console.log(this.currentSlide);
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
            console.log(this.currentSlide);
        },
        goToPage2() {
            // 使用 Vue Router 跳转到 page1
            this.$router.push('/page2');
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.home-page-container {
    position: relative;
    width: 100%;
    height: auto;
}

.background-image {
    background-image: url('@/assets/background-image.jpg');
    background-size: auto;
    background-position: center top;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 1;
}

.home-container {
    font-family: 'Roboto', sans-serif;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    text-align: center;
    position: relative;
    z-index: 2;
}

.slider {
    position: relative;
    overflow: hidden;
    /* 隐藏溢出内容 */
    width: 100%;
    /* 可调整宽度 */
    max-width: 400px;
    /* 最大宽度 */
}


.slide {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.slide-image {
    width: 100%;
    border-radius: 10px;
}

.slide-text {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #333;
}

.navigation {
    margin-top: 20px;
}

.nav-button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 5px;
    /* 按钮间距 */
}

.nav-button:hover {
    background-color: #45a049;
}
</style>
