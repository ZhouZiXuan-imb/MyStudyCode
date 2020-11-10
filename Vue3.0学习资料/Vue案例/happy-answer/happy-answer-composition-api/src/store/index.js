import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      level: "第一周",
      questions: [],
      itemNum: 1,
      // 选择的答案
      selectAnswer: []
    };
  },
  mutations: {
    addData(state, payload) {
      state.questions = payload.data;
    },
    updateNum(state, payload) {
      state.itemNum += payload;
    },
    pushId(state, payload) {
      state.selectAnswer.push(payload);
      console.log(state.selectAnswer);
    }
  },
  actions: {
    async getData(context) {
      let res = await axios.get("data/question.json");
      context.commit("addData", res);
    },
    // 点击下一题之后把数据更新
    nextItem(context, payload) {
      // 如果itemNum小于题目的数量那么调用addItemNum
      if (context.state.itemNum < context.state.questions.length) {
        context.commit("updateNum", 1);
      }

      context.commit("pushId", payload);
    }
  }
});
