<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">点我让数字增加{{ num }}</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    ...mapMutations(["add"])
  },
  computed: {
    ...mapGetters(["num"])
    // num() {
    // return this.$store.getters.num;
    // }
  }
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
</style>
