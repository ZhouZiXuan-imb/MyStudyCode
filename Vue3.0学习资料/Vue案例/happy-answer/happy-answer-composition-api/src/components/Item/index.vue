<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ itemNum }}</span>
      </header>
    </section>
    <div class="item_back item_container_style">
      <div class="item_list_container" v-if="questions.length > 0">
        <!-- 题干 -->
        <header class="item_title">
          {{ questions[itemNum - 1].topic_name }}
        </header>
        <!-- 选项 -->
        <ul>
          <li
            class="item_list"
            v-for="(item, index) in questions[itemNum - 1].topic_answer"
            :key="item.id"
            @click="choosed(index, item.topic_answer_id)"
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
      @click="nextItem()"
      v-if="itemNum < questions.length"
    ></span>
    <span class="submit_item button_style" @click="submitItem()" v-else></span>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "index",
  //#region  composition API写法
  setup() {
    //#region  调用store中的getData方法
    let store = useStore();
    store.dispatch("getData");
    //#endregion

    //#region  获取题目数据
    let questions = computed(() => store.state.questions);
    //#endregion

    //#region  获取题目数据

    //#endregion

    //#region  获取题目序号
    let itemNum = computed(() => store.state.itemNum);
    //#endregion

    //#region  定义方法，点击每个li把当前li的索引和id赋值给定义好的变量
    let chooseNum = ref(null);
    let chooseId = ref(null);
    function choosed(index, id) {
      chooseNum.value = index;
      chooseId.value = id;
      console.log(chooseId);
    }
    //#endregion

    //#region 点击下一题功能
    function nextItem() {
      if (chooseNum.value != null) {
        chooseNum.value = null;
        // console.log(chooseId);
        store.dispatch("nextItem", chooseId.value);
      } else {
        alert("您还没有选择答案");
      }
    }
    //#endregion

    //#region 点击提交按钮
    let router = useRouter();
    function submitItem() {
      if (chooseNum.value != null) {
        chooseNum.value = null;
        store.dispatch("nextItem", chooseId.value);
        router.push("/score");
      } else {
        alert("您还没有选择答案");
      }
    }
    //#endregion

    return {
      questions,
      itemNum,
      choosed,
      chooseNum,
      nextItem,
      submitItem
    };
  },
  //#endregion

  //#region  Options API写法
  data() {
    return {
      // chooseNum: null,
      // chooseId: null
    };
  },
  created() {
    // this.$store.dispatch("getData");
  },
  computed: {
    // ...mapState(["itemNum", "questions"])
  },
  methods: {
    // choose(index, id) {
    //   this.chooseNum = index;
    //   this.chooseId = id;
    // },
    // nextItem(id) {
    //   if (this.chooseNum != null) {
    //     this.chooseNum = null;
    //     this.$store.dispatch("nextItem", id);
    //   } else {
    //     alert("您还没有选择答案");
    //   }
    // },
    // submitItem(id) {
    //   if (this.chooseNum != null) {
    //     this.chooseNum = null;
    //     this.$store.dispatch("nextItem", id);
    //     this.$router.push("/score");
    //   } else {
    //     alert("您还没有选择答案");
    //   }
    // }
  }
};
//#endregion
</script>

<style lang="scss">
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
