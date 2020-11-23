<template>
  <div class="hello">
    <h1 @click="handleChange">{{ prop }}----{{ obj.name }}</h1>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">这里是占用一整行</div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">这里是占用半行</div></el-col
      >
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">这里是占用半行</div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>

    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api";

export default {
  name: "HelloWorld",
  setup() {
    let prop = ref(1);

    let obj = reactive({
      name: "周子轩",
      age: 18,
    });
    function handleChange() {
      prop.value = 123;
      obj.name = "周周";
    }

    return {
      prop,
      handleChange,
      obj,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.el-row {
  margin-bottom: 20px;
  text-align: center;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
