import {createStore} from "vuex";
import axios from "axios";

export default createStore({
    state: {
        list: [],
        viewKey: 'all',
    },
    mutations: {
        handleAdd(state, val) {
            state.list.push({
                id: new Date().valueOf(),
                info: val,
                done: false
            });
        },
        handleRemove(state, id) {
            let index = state.list.findIndex(item => item.id == id);
            state.list.splice(index, 1);
        },
        updateData(state, val) {
            state.list = val;
        },
        updateDone(state, params) {
            let index = state.list.findIndex(item => item.id == params.id)
            state.list[index].done = params.checked
        },
        removeAccomplish(state) {
            state.list = state.list.filter(item => item.done == false)
        },
        // 切换选项卡
        changeTask(state,val) {
            state.viewKey = val
        }
    },
    actions: {
        async getData(context) {
            let res = await axios.get("list.json");
            context.commit("updateData", res.data);
        }
    },
    getters: {
        num(state) {
            let data = state.list.filter(item => item.done == false)
            return data.length
        },
        filterView(state) {
            if(state.viewKey == 'all') {
                return state.list;
            }
            if(state.viewKey == 'undone') {
                return state.list.filter(item => item.done == false);
            }
            if(state.viewKey == 'done') {
                return state.list.filter(item => item.done == true);
            }
        }
    }
});
