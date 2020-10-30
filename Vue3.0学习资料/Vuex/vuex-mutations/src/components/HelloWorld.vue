<template>
  <div class="hello">
    <h1 @click="changeName">{{ msg }}</h1>

    <p v-text="username" @click="changeOtherName(name)"></p>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      name:'猪猪'
    }
  },
  computed:{
    ...mapState(['username'])
  },
  methods:{
    ...mapMutations(['changeName','changeOtherName'])
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
