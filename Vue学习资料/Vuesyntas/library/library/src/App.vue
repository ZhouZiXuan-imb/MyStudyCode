<template>
  <div class="grid">
    <div>
      <h1>图书管理</h1>
      <div class="book">
        <div>
          <label for="id">
            编号：
          </label>
          <input type="text" id="id" v-model="id" :disabled="flag">
          <label for="name">
            名称：
          </label>
          <input type="text" id="name" v-model="name">
          <button @click="handleAdd" :disabled="newFlag">提交</button>
        </div>
      </div>
    </div>
    <div class="total">
      <span>图书总数：</span>
      <span>{{booksLenth}}</span>
    </div>
    <table>
      <thead>
      <tr>
        <th>编号</th>
        <th>名称</th>
        <th>时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list" :key="item.id">
        <td v-text="item.id"></td>
        <td v-text="item.name"></td>
        <td v-text="item.date"></td>
        <td>
          <a href="" @click.prevent="handleEdit(item.id)">修改</a>
          <span>|</span>
          <a href="" @click.prevent="handleRemove(item.id)">删除</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'
export default {
  name: "App",
  data() {
    return {
      list: '',
      id: '',
      name: '',
      flag: false,
      newFlag: false,
    }
  },
  created() {
    this.refresh()
  },
  methods: {
    // 刷新数据
    async refresh() {
      let res = await axios.get('books')
      this.list = res.data
    },
    // 添加数据
    async handleAdd() {
      if (this.flag) {
        let res = await axios.put(`books/${this.id}`, {
          name: this.name
        })
        if (res.data.status == 200) {
          this.refresh();
        }
      this.flag = false
      } else {
        let res = await axios.post('books', {
          name: this.name
        })
        if (res.data.status == 200) {
          this.refresh();
        }
      }
      this.id = ''
      this.name = '';
    },
    // 删除数据
    async handleRemove(id) {
      let res = await axios.delete(`books/${id}`)
      if (res.data.status == 200) {
        this.refresh();
      }
    },
    // 修改数据(回显数据)
    async handleEdit(id) {
      // 点击了修改按钮之后让id输入框为禁用
      this.flag = true;
      let res = await axios.get(`books/${id}`)
      this.id = res.data.id
      this.name = res.data.name;
    },
  },
  //  验证图书是否存在
  watch: {
    async name() {
      let res = await axios(`books/book/${this.name}`)
      if(res.data.status == 1) {
        this.newFlag = true;
      } else {
        this.newFlag = false;
      }
    }
  },
  computed: {
    booksLenth() {
      return this.list.length
    }
  }
};
</script>

<style>
.grid {
  margin: auto;
  width: 530px;
  text-align: center;
}

.grid table {
  border-top: 1px solid #C2D89A;
  width: 100%;
  border-collapse: collapse;
}

.grid th,
td {
  padding: 10px;
  border: 1px dashed orange;
  height: 35px;
  line-height: 35px;
}

.grid th {
  background-color: orange;
}

.grid .book {
  padding-bottom: 10px;
  padding-top: 5px;
  background-color: orange;
}
</style>
