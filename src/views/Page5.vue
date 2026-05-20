<template>
    <div class="letter-page-container">
        <!-- 520粉色背景 -->
        <div class="background-gradient"></div>

        <!-- 完全盛开的爱情树背景 -->
        <div class="tree-background">
            <div class="big-tree">
                <div class="tree-trunk"></div>
                <div class="tree-crown">
                    <div class="leaf leaf1"></div>
                    <div class="leaf leaf2"></div>
                    <div class="leaf leaf3"></div>
                    <div class="leaf leaf4"></div>
                    <div class="leaf leaf5"></div>
                    <div class="leaf leaf6"></div>
                    <div class="leaf leaf7"></div>
                    <div class="flower" v-for="n in 12" :key="n" :class="`flower${n}`">🌸</div>
                    <div class="heart-decoration">💖</div>
                </div>
            </div>
        </div>

        <!-- 飘落的爱心 -->
        <div class="hearts-container">
            <div v-for="i in 15" :key="i" class="heart" :style="getHeartStyle(i)"></div>
        </div>

        <div class="letter-container">
            <!-- ========================================== -->
            <!-- === 📝 在这里修改信件内容！尽情发挥吧！ === -->
            <!-- ========================================== -->

            <h1 class="letter-title">致我最爱的宝宝</h1>

            <div class="letter-content">
                <p>
                    亲爱的宝宝：<br /><br />
                    520快乐！这是我们一起度过的第几个520呢？不管是第几个，我对你的爱从来没有减少过，反而一天比一天更深。
                </p>

                <p>
                    谢谢你出现在我的生命里，谢谢你愿意陪我走过这段旅程。和你在一起的每一天，都是我最珍贵的回忆。
                    你的笑容是我每天最想看到的风景，你的声音是我耳边最动听的旋律。
                </p>

                <p>
                    我还记得我们第一次见面时的样子，记得你第一次对我说"我爱你"时我的心跳，
                    记得我们一起度过的每一个重要时刻。这些回忆就像一颗颗珍珠，串起了我们的爱情故事。
                </p>

                <p>
                    未来还有很长的路要走，我想和你一起去看海，一起去看世界，一起经历人生的喜怒哀乐。
                    我想每天醒来都能看到你，想每天都能给你一个大大的拥抱，想每天都能对你说"我爱你"。
                </p>

                <p>
                    宝宝，谢谢你让我学会了如何去爱，谢谢你让我感受到了被爱的幸福。
                    我会用我的一生去守护你，去疼你，去爱你。
                </p>

                <p class="ending">
                    520，我爱你，不止今天，而是每一天。❤️
                    <br /><br />
                    永远爱你的 xx
                    <br />
                    2024年5月20日
                </p>
            </div>

            <button @click="showLoveEffect" class="love-button" v-if="!showConfetti">
                💌 我愿意！
            </button>

            <div v-if="showConfetti" class="confetti-container">
                <div v-for="i in 50" :key="i" class="confetti" :style="getConfettiStyle(i)"></div>
                <div class="final-message">
                    💖 我们要永远在一起！💖
                </div>
            </div>

            <button @click="goBack" class="back-button">
                ← 返回
            </button>

            <!-- ========================================== -->
            <!-- === 👆 以上是信件内容区域，尽情修改吧！ === -->
            <!-- ========================================== -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoveLetterPage5',
    data() {
        return {
            showConfetti: false
        };
    },
    methods: {
        showLoveEffect() {
            this.showConfetti = true;
        },
        goBack() {
            this.$router.push('/');
        },
        // eslint-disable-next-line no-unused-vars
        getHeartStyle(i) {
            const left = Math.random() * 100;
            const delay = Math.random() * 8;
            const duration = 6 + Math.random() * 6;
            const size = 12 + Math.random() * 18;
            return {
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                fontSize: `${size}px`
            };
        },
        // eslint-disable-next-line no-unused-vars
        getConfettiStyle(i) {
            const left = Math.random() * 100;
            const delay = Math.random() * 2;
            const duration = 3 + Math.random() * 2;
            const colors = ['#ff6b9d', '#d63384', '#fcb69f', '#ffecd2', '#ff9a9e', '#ff6b6b'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            return {
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                backgroundColor: color
            };
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.letter-page-container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
}

/* 520粉色渐变背景 */
.background-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%);
    opacity: 0.8;
    z-index: 1;
}

/* 爱情树背景 */
.tree-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    pointer-events: none;
    opacity: 0.3;
}

.big-tree {
    position: relative;
    transform: scale(2.5);
    margin-bottom: 100px;
}

.big-tree .tree-trunk {
    width: 30px;
    height: 100px;
    background: linear-gradient(to right, #8B4513, #A0522D, #8B4513);
    border-radius: 8px;
    margin: 0 auto;
}

.big-tree .tree-crown {
    position: relative;
    width: 180px;
    height: 150px;
    margin: 0 auto -20px;
}

.big-tree .leaf {
    position: absolute;
    width: 50px;
    height: 50px;
    background: radial-gradient(circle at 30% 30%, #90EE90, #228B22);
    border-radius: 50% 0 50% 50%;
    opacity: 1;
}

.big-tree .leaf1 { top: 20px; left: 10px; transform: rotate(-30deg); }
.big-tree .leaf2 { top: 10px; left: 60px; transform: rotate(0deg); }
.big-tree .leaf3 { top: 20px; left: 110px; transform: rotate(30deg); }
.big-tree .leaf4 { top: 60px; left: 0px; transform: rotate(-45deg); }
.big-tree .leaf5 { top: 60px; left: 120px; transform: rotate(45deg); }
.big-tree .leaf6 { top: 80px; left: 40px; transform: rotate(-20deg); }
.big-tree .leaf7 { top: 80px; left: 80px; transform: rotate(20deg); }

.big-tree .flower {
    position: absolute;
    font-size: 20px;
    animation: sway 3s ease-in-out infinite;
}

.big-tree .flower1 { top: 5px; left: 45px; }
.big-tree .flower2 { top: 35px; left: 85px; }
.big-tree .flower3 { top: 20px; left: 65px; animation-delay: 0.2s; }
.big-tree .flower4 { top: 45px; left: 30px; animation-delay: 0.4s; }
.big-tree .flower5 { top: 55px; left: 100px; animation-delay: 0.6s; }
.big-tree .flower6 { top: 70px; left: 60px; animation-delay: 0.8s; }
.big-tree .flower7 { top: 15px; left: 25px; animation-delay: 1s; }
.big-tree .flower8 { top: 50px; left: 140px; animation-delay: 0.3s; }
.big-tree .flower9 { top: 85px; left: 90px; animation-delay: 0.5s; }
.big-tree .flower10 { top: 30px; left: 120px; animation-delay: 0.7s; }
.big-tree .flower11 { top: 65px; left: 15px; animation-delay: 0.9s; }
.big-tree .flower12 { top: 90px; left: 50px; animation-delay: 1.1s; }

.big-tree .heart-decoration {
    position: absolute;
    top: 35px;
    left: 70px;
    font-size: 35px;
    animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes sway {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

/* 飘落的爱心 */
.hearts-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    pointer-events: none;
    overflow: hidden;
}

.heart {
    position: absolute;
    top: -50px;
    animation: fallingHeart linear infinite;
    opacity: 0.5;
}

@keyframes fallingHeart {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.5;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

.letter-container {
    position: relative;
    z-index: 4;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px 40px;
}

.letter-title {
    color: #d63384;
    font-size: 2.2rem;
    margin-bottom: 30px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

.letter-content {
    background: rgba(255, 255, 255, 0.92);
    border-radius: 20px;
    padding: 40px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 10px 40px rgba(214, 51, 132, 0.2);
}

.letter-content p {
    color: #422a0c;
    font-size: 1.1rem;
    line-height: 2;
    margin-bottom: 25px;
    text-align: justify;
    text-indent: 2em;
}

.letter-content .ending {
    text-align: right;
    font-style: italic;
    text-indent: 0;
    margin-top: 40px;
    color: #d63384;
}

.love-button {
    margin-top: 30px;
    padding: 18px 50px;
    background: linear-gradient(135deg, #d63384, #ff6b9d);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: glow 2s infinite;
}

@keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(214, 51, 132, 0.3); }
    50% { box-shadow: 0 0 40px rgba(214, 51, 132, 0.6); }
}

.love-button:hover {
    transform: translateY(-3px) scale(1.05);
}

/* 彩花效果 */
.confetti-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    pointer-events: none;
}

.confetti {
    position: absolute;
    top: -20px;
    width: 10px;
    height: 20px;
    border-radius: 3px;
    animation: confettiFall linear forwards;
}

@keyframes confettiFall {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}

.final-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    font-weight: bold;
    color: #d63384;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
    animation: popIn 0.8s ease forwards;
    z-index: 101;
    white-space: nowrap;
}

@keyframes popIn {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }
    50% {
        transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
}

.back-button {
    margin-top: 20px;
    background: none;
    border: 1px solid #d63384;
    color: #d63384;
    padding: 10px 25px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.back-button:hover {
    background: #d63384;
    color: white;
}
</style>
