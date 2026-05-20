<template>
    <div class="puzzle-page-container">
        <!-- 520粉色渐变背景 -->
        <div class="background-gradient"></div>

        <!-- 飘落的爱心动画 -->
        <div class="hearts-container">
            <div v-for="i in 20" :key="i" class="heart" :style="getHeartStyle(i)"></div>
        </div>

        <div class="puzzle-container">
            <h1 class="title">💕 520 爱情解密游戏 💕</h1>

            <!-- 爱情树 -->
            <div class="love-tree-container">
                <div class="love-tree" :class="`stage-${treeStage}`">
                    <div class="tree-trunk"></div>
                    <div class="tree-crown">
                        <div class="leaf leaf1"></div>
                        <div class="leaf leaf2"></div>
                        <div class="leaf leaf3"></div>
                        <div class="leaf leaf4"></div>
                        <div class="leaf leaf5"></div>
                        <div class="flower flower1" v-if="treeStage >= 3">🌸</div>
                        <div class="flower flower2" v-if="treeStage >= 4">🌸</div>
                        <div class="flower flower3" v-if="treeStage >= 5">💖</div>
                    </div>
                </div>
            </div>

            <!-- 进度显示 -->
            <div class="progress">
                <span class="hearts">
                    <span v-for="i in totalPuzzles" :key="i" class="heart-icon" :class="{ filled: i <= solvedCount }">
                        {{ i <= solvedCount ? '❤️' : '🤍' }}
                    </span>
                </span>
                <span class="progress-text">({{ solvedCount }}/{{ totalPuzzles }})</span>
            </div>

            <!-- 游戏未完成：显示当前谜题 -->
            <div v-if="!isGameComplete" class="puzzle-card">
                <div class="puzzle-number">第 {{ currentPuzzleIndex + 1 }} 题</div>
                <div class="puzzle-question">{{ currentPuzzle.question }}</div>

                <div class="hint-container">
                    <button @click="showHint = !showHint" class="hint-button">
                        {{ showHint ? '隐藏提示' : '💡 查看提示' }}
                    </button>
                    <div v-if="showHint" class="hint-text">{{ currentPuzzle.hint }}</div>
                </div>

                <div class="answer-input">
                    <input
                        v-model="userAnswer"
                        type="text"
                        placeholder="请输入你的答案..."
                        @keyup.enter="checkAnswer"
                        :disabled="isPuzzleSolved"
                    />
                    <button @click="checkAnswer" class="submit-button" :disabled="isPuzzleSolved">
                        {{ isPuzzleSolved ? '已答对 ✓' : '提交答案' }}
                    </button>
                </div>

                <div v-if="showSuccessMessage" class="success-message">
                    ✨ {{ currentPuzzle.successMessage }}
                </div>

                <button
                    v-if="isPuzzleSolved && currentPuzzleIndex < totalPuzzles - 1"
                    @click="nextPuzzle"
                    class="next-button"
                >
                    下一题 →
                </button>
            </div>

            <!-- 游戏完成：显示跳转按钮 -->
            <div v-else class="complete-card">
                <div class="complete-title">🎉 恭喜你！爱情树开花了！🎉</div>
                <div class="complete-message">
                    你解开了所有关于我们的爱情密码，
                    <br />
                    这棵爱情树见证了我们的点点滴滴。
                    <br />
                    现在，打开那封专属的520信件吧！
                </div>
                <button @click="goToPage5" class="reveal-button">
                    💌 打开秘密信件
                </button>
                <button @click="resetGame" class="reset-button">
                    🔄 重新开始
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LovePuzzlePage4',
    data() {
        return {
            // ==========================================
            // === 📝 在这里修改题目和答案！你可以自由编辑！ ===
            // ==========================================
            puzzles: [
                {
                    id: 1,
                    question: "我们第一次见面的地方是哪里？",
                    answer: "图书馆",
                    hint: "提示：那天阳光正好，你穿着一件很好看的衣服~",
                    successMessage: "答对了！还记得那天你站在书架旁，时间仿佛都静止了..."
                },
                {
                    id: 2,
                    question: "我们确定关系的那天是几月几号？（格式：MMDD）",
                    answer: "1217",
                    hint: "提示：是冬天，但是那天心里特别暖~",
                    successMessage: "没错！那是我这辈子最开心的一天！"
                },
                {
                    id: 3,
                    question: "我们之间的专属暗号/梗是什么？",
                    answer: "我爱你",
                    hint: "提示：我们每天都会说的三个字~",
                    successMessage: "我也爱你！这句话永远都听不腻！"
                },
                {
                    id: 4,
                    question: "我们说好要一起去的地方是哪里？",
                    answer: "看海",
                    hint: "提示：有蓝蓝的海水，软软的沙滩~",
                    successMessage: "对！我们一定要一起去，踩在沙滩上，听海浪的声音！"
                },
                {
                    id: 5,
                    question: "520，我最想对你说的三个字是？",
                    answer: "我爱你",
                    hint: "提示：这是我心里最真实的答案~",
                    successMessage: "我也爱你！520快乐，我的宝宝！"
                }
            ],
            // ==========================================
            // === 👆 以上是题目配置区域，尽情修改吧！ ===
            // ==========================================

            currentPuzzleIndex: 0,
            userAnswer: "",
            showHint: false,
            isPuzzleSolved: false,
            showSuccessMessage: false,
            solvedCount: 0
        };
    },
    computed: {
        totalPuzzles() {
            return this.puzzles.length;
        },
        currentPuzzle() {
            return this.puzzles[this.currentPuzzleIndex];
        },
        treeStage() {
            return Math.min(this.solvedCount + 1, 5);
        },
        isGameComplete() {
            return this.solvedCount >= this.totalPuzzles;
        }
    },
    mounted() {
        this.loadProgress();
    },
    methods: {
        checkAnswer() {
            if (this.isPuzzleSolved) return;

            const correctAnswer = this.currentPuzzle.answer.trim().toLowerCase();
            const userAnswer = this.userAnswer.trim().toLowerCase();

            if (userAnswer === correctAnswer) {
                this.isPuzzleSolved = true;
                this.showSuccessMessage = true;
                this.solvedCount++;
                this.saveProgress();
            } else {
                alert("答案不对哦，再想想吧~ 💭");
            }
        },
        nextPuzzle() {
            if (this.currentPuzzleIndex < this.totalPuzzles - 1) {
                this.currentPuzzleIndex++;
                this.userAnswer = "";
                this.showHint = false;
                this.isPuzzleSolved = false;
                this.showSuccessMessage = false;
            }
        },
        goToPage5() {
            this.$router.push('/page5');
        },
        resetGame() {
            this.currentPuzzleIndex = 0;
            this.userAnswer = "";
            this.showHint = false;
            this.isPuzzleSolved = false;
            this.showSuccessMessage = false;
            this.solvedCount = 0;
            localStorage.removeItem('puzzleGameProgress');
        },
        saveProgress() {
            localStorage.setItem('puzzleGameProgress', JSON.stringify({
                currentPuzzleIndex: this.currentPuzzleIndex,
                solvedCount: this.solvedCount,
                isPuzzleSolved: this.isPuzzleSolved
            }));
        },
        loadProgress() {
            const saved = localStorage.getItem('puzzleGameProgress');
            if (saved) {
                const progress = JSON.parse(saved);
                this.currentPuzzleIndex = progress.currentPuzzleIndex || 0;
                this.solvedCount = progress.solvedCount || 0;
                this.isPuzzleSolved = progress.isPuzzleSolved || false;
                if (this.isPuzzleSolved && this.solvedCount < this.totalPuzzles) {
                    this.showSuccessMessage = true;
                }
            }
        },
        // eslint-disable-next-line no-unused-vars
        getHeartStyle(i) {
            const left = Math.random() * 100;
            const delay = Math.random() * 8;
            const duration = 5 + Math.random() * 5;
            const size = 10 + Math.random() * 15;
            return {
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                fontSize: `${size}px`
            };
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.puzzle-page-container {
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

/* 飘落的爱心 */
.hearts-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    overflow: hidden;
}

.heart {
    position: absolute;
    top: -50px;
    animation: fallingHeart linear infinite;
    opacity: 0.6;
}

@keyframes fallingHeart {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.6;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

.puzzle-container {
    position: relative;
    z-index: 3;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px 40px;
}

.title {
    color: #d63384;
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

/* 爱情树样式 */
.love-tree-container {
    margin: 20px 0;
    display: flex;
    justify-content: center;
}

.love-tree {
    position: relative;
    transition: all 0.8s ease;
}

.tree-trunk {
    width: 20px;
    height: 60px;
    background: linear-gradient(to right, #8B4513, #A0522D, #8B4513);
    border-radius: 5px;
    margin: 0 auto;
    transition: all 0.8s ease;
}

.love-tree.stage-1 .tree-trunk { height: 20px; }
.love-tree.stage-2 .tree-trunk { height: 40px; }
.love-tree.stage-3 .tree-trunk { height: 55px; }
.love-tree.stage-4 .tree-trunk { height: 65px; }
.love-tree.stage-5 .tree-trunk { height: 70px; }

.tree-crown {
    position: relative;
    width: 120px;
    height: 100px;
    margin: 0 auto -10px;
}

.leaf {
    position: absolute;
    width: 40px;
    height: 40px;
    background: radial-gradient(circle at 30% 30%, #90EE90, #228B22);
    border-radius: 50% 0 50% 50%;
    opacity: 0;
    transform: scale(0);
    transition: all 0.6s ease;
}

.leaf1 { top: 20px; left: 10px; }
.leaf2 { top: 10px; left: 40px; }
.leaf3 { top: 20px; left: 70px; }
.leaf4 { top: 50px; left: 0px; }
.leaf5 { top: 50px; left: 80px; }

.love-tree.stage-1 .leaf1,
.love-tree.stage-2 .leaf1,
.love-tree.stage-3 .leaf1,
.love-tree.stage-4 .leaf1,
.love-tree.stage-5 .leaf1 { opacity: 1; transform: scale(1) rotate(-30deg); }

.love-tree.stage-2 .leaf2,
.love-tree.stage-3 .leaf2,
.love-tree.stage-4 .leaf2,
.love-tree.stage-5 .leaf2 { opacity: 1; transform: scale(1) rotate(0deg); }

.love-tree.stage-2 .leaf3,
.love-tree.stage-3 .leaf3,
.love-tree.stage-4 .leaf3,
.love-tree.stage-5 .leaf3 { opacity: 1; transform: scale(1) rotate(30deg); }

.love-tree.stage-3 .leaf4,
.love-tree.stage-4 .leaf4,
.love-tree.stage-5 .leaf4 { opacity: 1; transform: scale(0.9) rotate(-45deg); }

.love-tree.stage-3 .leaf5,
.love-tree.stage-4 .leaf5,
.love-tree.stage-5 .leaf5 { opacity: 1; transform: scale(0.9) rotate(45deg); }

.flower {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    transition: all 0.6s ease;
    font-size: 24px;
}

.flower1 { top: 5px; left: 30px; }
.flower2 { top: 35px; left: 60px; }
.flower3 { top: 20px; left: 45px; font-size: 32px; }

.love-tree.stage-3 .flower1,
.love-tree.stage-4 .flower1,
.love-tree.stage-5 .flower1 { opacity: 1; transform: scale(1); }

.love-tree.stage-4 .flower2,
.love-tree.stage-5 .flower2 { opacity: 1; transform: scale(1); }

.love-tree.stage-5 .flower3 { opacity: 1; transform: scale(1.2); animation: pulse 1s infinite; }

@keyframes pulse {
    0%, 100% { transform: scale(1.2); }
    50% { transform: scale(1.4); }
}

/* 进度显示 */
.progress {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
}

.hearts {
    display: flex;
    gap: 5px;
}

.heart-icon {
    font-size: 24px;
    transition: all 0.3s ease;
}

.heart-icon.filled {
    animation: heartBeat 0.6s ease;
}

@keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
}

.progress-text {
    color: #d63384;
    font-weight: bold;
}

/* 谜题卡片 */
.puzzle-card, .complete-card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    padding: 30px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 10px 40px rgba(214, 51, 132, 0.2);
    text-align: center;
}

.puzzle-number {
    color: #d63384;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.puzzle-question {
    color: #422a0c;
    font-size: 1.3rem;
    margin-bottom: 20px;
    line-height: 1.6;
}

.hint-container {
    margin-bottom: 20px;
}

.hint-button {
    background: none;
    border: 1px solid #fcb69f;
    color: #d63384;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.hint-button:hover {
    background: #fcb69f;
    color: white;
}

.hint-text {
    margin-top: 10px;
    color: #666;
    font-size: 0.95rem;
    font-style: italic;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.answer-input {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.answer-input input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #fcb69f;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
}

.answer-input input:focus {
    border-color: #d63384;
    box-shadow: 0 0 0 3px rgba(214, 51, 132, 0.1);
}

.answer-input input:disabled {
    background: #f5f5f5;
    color: #666;
}

.submit-button {
    padding: 12px 24px;
    background: linear-gradient(135deg, #d63384, #ff6b9d);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(214, 51, 132, 0.3);
}

.submit-button:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.success-message {
    background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
    color: #2e7d32;
    padding: 15px;
    border-radius: 10px;
    margin: 15px 0;
    animation: slideIn 0.5s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.next-button {
    padding: 12px 30px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.next-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);
}

/* 完成卡片 */
.complete-title {
    color: #d63384;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.complete-message {
    color: #422a0c;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 30px;
}

.reveal-button {
    padding: 15px 40px;
    background: linear-gradient(135deg, #d63384, #ff6b9d);
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 15px;
    animation: glow 2s infinite;
}

@keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(214, 51, 132, 0.3); }
    50% { box-shadow: 0 0 40px rgba(214, 51, 132, 0.6); }
}

.reveal-button:hover {
    transform: translateY(-3px) scale(1.05);
}

.reset-button {
    background: none;
    border: 1px solid #999;
    color: #666;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.reset-button:hover {
    background: #f5f5f5;
}
</style>
