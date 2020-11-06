import {createStore} from "vuex";
import axios from 'axios'

export default createStore({
    state() {
        return {
            level: '第一周',
            questions: [],
            itemNum: 1,
            // 选择的答案保存在这里
            answerid: [],

        }
    },
    mutations: {
        getData(state, payload) {
            state.questions = payload.data
            console.log(state.questions)
        },
        remberAnswer(state, payload) {
            console.log(state, payload)
        },
        addItemNum(state,num) {
            state.itemNum += num
        },
        answeridPush(state, payload) {
            state.answerid.push(payload)
        },

    },
    actions: {
        async asyncGetData(context) {
            let res = await axios.get('data/question.json')
            context.commit('getData', res)
        },
        addNum(context, payload) {
            context.commit('answeridPush', payload)
            // 如果itemNum小于题目的数量那么调用addItemNum
            if (context.state.itemNum < context.state.questions.length) {
                context.commit("addItemNum", 1);
            }
        }
    },
    modules: {}
});
