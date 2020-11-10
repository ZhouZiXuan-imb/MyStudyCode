<template>
  <div class="score_container">
    <div>
      <div class="your_scores_container">
        <header class="your_scores">
          <span class="score_num">{{ score }}</span>
          <span class="fenshu">分!</span>
        </header>
        <div class="result_tip">{{ scoreTips }}</div>
      </div>
      <div class="share_button" @click="showCover"></div>
      <div class="share_code">
        <header class="share_header">关注葡萄之家,获取答案.</header>
        <img src="/images/4-4.png" height="212" class="code_img" alt="" />
      </div>
      <div class="share_cover" v-show="showHide" @click="showCover">
        <img src="/images/5-2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "index",
  setup() {
    //#region 定义分数变量 计算分数
    // 获取store中存储的用户选择的id
    let selectAnswer = computed(() => store.state.selectAnswer);
    // 正确答案
    let rightAnswer = [2, 7, 12, 13, 18];
    let store = useStore();
    let score = ref(0);
    // 计算分数
    function calc() {
      selectAnswer.value.forEach((item, index) => {
        if (item == rightAnswer[index]) {
          score.value += 20;
        }
      });
    }
    calc();
    //#endregion

    //#region 是否显示遮罩层功能
    let showHide = ref(false); //是否显示提示
    function showCover() {
      if (!showHide.value) {
        showHide.value = true;
      } else {
        showHide.value = false;
      }
    }
    //#endregion

    //#region 分数提示信息功能
    let scoreTips = ref(""); //分数提示
    let scoreTipsArr = [
      "你说，是不是把知识都还给小学老师了？",
      "还不错，但还需要继续加油哦！",
      "不要嘚瑟还有进步的空间！",
      "智商离爆表只差一步了！",
      "你也太聪明啦，葡萄之家欢迎你！"
    ];
    function message() {
      switch (score.value) {
        case 0:
          scoreTips.value = scoreTipsArr[0];
          break;
        case 20:
          scoreTips.value = scoreTipsArr[0];
          break;
        case 40:
          scoreTips.value = scoreTipsArr[1];
          break;
        case 60:
          scoreTips.value = scoreTipsArr[2];
          break;
        case 80:
          scoreTips.value = scoreTipsArr[3];
          break;
        case 100:
          scoreTips.value = scoreTipsArr[4];
          break;
      }
    }
    message();
    //#endregion

    return {
      rightAnswer,
      scoreTipsArr,
      scoreTips,
      score,
      showHide,
      showCover
    };
  }
};
</script>

<style lang="scss">
.score_container {
  height: 100%;
  background-image: url("/images/4-1.jpg");
}

.your_scores_container {
  width: 9.7rem;
  height: 9.1rem;
  background: url("/images/4-2.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;

  .your_scores {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";

    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }

    .fenshu {
      color: #a51d31;
    }
  }

  .result_tip {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}

.share_button {
  width: 6.025rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
  background: url("/images/4-3.png") no-repeat 0.4rem 0;
  background-size: 5.825rem 100%;
}

.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;

  .share_header {
    color: #664718;
    font-size: 0.475rem;
    font-family: "Microsoft YaHei";
    width: 7rem;
    font-weight: 500;
  }

  .code_img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}

.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url("/images/5-1.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}

.share_img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>
