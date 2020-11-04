import {createStore} from "vuex";
import axios from 'axios'

export default createStore({
    state() {
        return {
            level: '第一周',
            questions: [],
            itemNum: 1,
        }
    },
    mutations: {
        addData(state, payload) {
            state.questions = payload.data
            console.log(state.questions)
        }
    },
    actions: {
        async getData(context) {
            let res = await axios.get('data/question.json')
            context.commit('addData', res)
        }
    },
    modules: {}
});
