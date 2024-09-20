<template>
    <div class="page-one-container">
        <!-- 背景图片容器 -->
        <div class="background-image"></div>

        <!-- SVG 图形 -->
        <div class="china-map-container">
            <img src="@/assets/china.svg" alt="中国地图" class="china-map" @click="handleCityClick" />
            <div v-for="(city, index) in cities" :key="index" class="city-marker"
                :style="{ left: city.coords.x + 'px', top: city.coords.y + 'px' }"
                @click.stop="showTooltip(city.name, $event)" data-city="city.name"></div>
            <div v-if="tooltipVisible" class="tooltip" :style="{ left: tooltipX + 'px', top: tooltipY + 'px' }">
                {{ tooltipText }}
            </div>
        </div>

        <div class="home-container">
            <h1>宝宝21岁生日快乐！</h1>
            <p>
                希望宝宝新的一岁天天开心哦<br />
                陪我的宝宝长大了一岁呢<br />
                很开心能遇见宝宝的20岁<br />
                我要一直陪你走下去！！<br />
                直到31、41……
            </p>
            <button @click="goToPage2" class="nav-button">继续点我啦</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageOne',
    data() {
        return {
            tooltipVisible: false,
            tooltipText: '',
            tooltipX: 0,
            tooltipY: 0,
            cities: {
                合肥: { info: '合肥：安徽省省会，历史悠久，文化底蕴深厚。', coords: { x: 200, y: 250 } }, // 修改为实际坐标
                上海: { info: '上海：国际大都市，繁华与历史并存。', coords: { x: 300, y: 180 } }, // 修改为实际坐标
                安吉: { info: '安吉：素有“竹海”之称，生态环境优美。', coords: { x: 1000, y: 620 } }, // 修改为实际坐标
                沈阳: { info: '沈阳：历史文化名城，工业重镇。', coords: { x: 150, y: 100 } }, // 修改为实际坐标
            },
        };
    },
    methods: {
        handleCityClick(event) {
            const cityClicked = event.target.getAttribute('data-city'); // 获取被点击的城市
            if (cityClicked && this.cities[cityClicked]) {
                const cityInfo = this.cities[cityClicked];
                this.tooltipText = cityInfo.info;
                this.tooltipX = cityInfo.coords.x;
                this.tooltipY = cityInfo.coords.y;
                this.tooltipVisible = true;
            } else {
                this.hideTooltip();
            }
        },
        hideTooltip() {
            this.tooltipVisible = false;
        },
        goToPage2() {
            this.$router.push('/page2');
        },
    },
};
</script>

<style scoped>
.page-one-container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: auto;
}

.background-image {
    background-image: url('@/assets/background-image.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    width: 100%;
    height: auto;
    opacity: 0.4;
    z-index: 1;
}

.china-map-container {
    position: relative;
    z-index: 2;
}

.china-map {
    width: 100%;
    height: auto;
}

.city-marker {
    position: absolute;
    width: 10px;
    /* 红点宽度 */
    height: 10px;
    /* 红点高度 */
    background-color: red;
    /* 红色 */
    border-radius: 50%;
    /* 圆形 */
    z-index: 3;
    /* 确保红点在上方 */
    cursor: pointer;
    /* 鼠标指针样式 */
}

.tooltip {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px;
    border-radius: 5px;
    z-index: 10;
    pointer-events: none;
    /* 使 tooltip 不拦截鼠标事件 */
    font-size: 10px;
}

.home-container {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 2;
    padding-top: 20px;
}
</style>
