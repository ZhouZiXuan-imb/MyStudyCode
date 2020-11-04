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
        addItemNum(state) {
            state.itemNum++
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
            context.commit('addItemNum', payload)
            context.commit('answeridPush', payload)
        }
    },
    modules: {}
});
