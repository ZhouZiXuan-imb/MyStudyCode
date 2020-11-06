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
        <header class="item_title">{{ questions[itemNum - 1].topic_name }}</header>
        <!-- 选项 -->
        <ul>
          <li class="item_list" v-for="(item,index) in questions[itemNum - 1].topic_answer" :key="item.id"
              @click="choose(index,item.topic_answer_id)">
            <span class="option_style" :class="chooseNum == index?'has_choosed':''">A</span>
            <span class="option_detail">{{item.answer_name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <span class="next_item button_style" @click="nextItem(chooseId)" v-if="itemNum < questions.length"></span>
    <span class="submit_item button_style" @click="submitItem(chooseId)" v-else></span>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "index",
  data() {
    return {
      chooseNum: null,
      chooseId: null,
    }
  },
  created(){
    this.$store.dispatch('getData')
  },
  computed: {
    ...mapState(['itemNum', 'questions'])
  },
  methods: {
    choose(index,id) {
      this.chooseNum = index;
      this.chooseId = id;
    },
    nextItem(id) {
      if(this.chooseNum != null) {
        this.chooseNum = null;
        this.$store.dispatch('nextItem',id)
      } else {
        alert('您还没有选择答案')
      }
    },
    submitItem(id) {
      if(this.chooseNum != null) {
        this.chooseNum = null;
        this.$store.dispatch('nextItem',id)
        this.$router.push('/score')
      } else {
        alert('您还没有选择答案')
      }
    }
  }
}
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