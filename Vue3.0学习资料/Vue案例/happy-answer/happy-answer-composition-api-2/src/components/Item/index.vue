<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="questions.length > 0">
          <!-- 题干 -->
          <header class="item_title">
            {{ questions_title }}
          </header>
          <!-- 选项 -->
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in questions[itemNum - 1].topic_answer"
              :key="index"
              @click="choosed(item.topic_answer_id, index)"
            >
              <span
                class="option_style"
                :class="chooseNum == index ? 'has_choosed' : ''"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="next_item button_style"
        @click="nextQuestion"
        v-if="itemNum < questions.length"
      ></span>
      <span class="submit_item button_style" @click="submitClick" v-else></span>
    </section>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Item",
  setup() {
    //#region 调用异步方法 触发函数
    let store = useStore();
    store.dispatch("getData");
    //#endregion

    //#region 获取答题数据
    let questions = computed(() => store.state.questions);
    //#endregion

    //#region 获取题目序号数据
    let itemNum = computed(() => store.state.itemNum);
    //#endregion

    //#region 每一个li的点击事件 点击之后让当前li为选中状态
    let chooseNum = ref(null);
    let chooseId = ref(null);
    function choosed(id, index) {
      chooseId.value = id;
      chooseNum.value = index;
    }
    //#endregion

    //#region 点击下一题按钮
    function nextQuestion() {
      if (chooseNum.value != null) {
        chooseNum.value = null;
        store.dispatch("getAnswerId", chooseId.value);
      } else {
        alert("请选择一个答案");
      }
    }

    //#endregion

    //#region 点击提交按钮
    let router = useRouter();
    function submitClick() {
      if (chooseNum.value != null) {
        chooseNum.value = null;
        store.dispatch("getAnswerId", chooseId.value);
        router.push("/score");
      } else {
        alert("请选择一个答案");
      }
    }
    //#endregion

    //#region 显示题干部分
    let questions_title = computed(
      () => questions.value[itemNum.value - 1].topic_name
    );
    //#endregion

    return {
      questions,
      itemNum,
      choosed,
      chooseId,
      chooseNum,
      nextQuestion,
      submitClick,
      questions_title
    };
  }
};
</script>

<style lang="scss">
.home_container {
  height: 100%;
  background-image: url("/images/1-1.jpg");
}
.next_item {
  background-image: url("/images/2-2.png");
}

.submit_item {
  background-image: url("/images/3-1.png");
}

.item_back {
  background-image: url("/images/2-1.png");
  background-size: 100% 100%;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list_container {
  margin: 2.5rem;
  padding: 0;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
