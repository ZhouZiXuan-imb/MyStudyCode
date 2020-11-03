<template>
  <section>
    <!-- 头部标签 -->
    <header class="top_tips">
      <span class="num_tip">题目{{ itemNum }}</span>
    </header>
    <!-- 题目内容 -->
    <div class="item_back item_container_style">
      <div class="item_list_container" v-if="questions.length > 0">
        <!--题干-->
        <header class="item_title">{{ itemTitle }}</header>
        <ul>
          <li class="item_list" v-for="(item,index) in questions[this.itemNum - 1].topic_answer" :key="item.id"
              @click="choosed(index,item.topic_answer_id)">
            <span class="option_style" :class="chooseNum == index? 'has_choosed':''">{{
                String.fromCharCode(65 + index)
              }}</span>
            <span class="option_detail">{{ item.answer_name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <span class="next_item button_style" @click="nextItem" v-if="itemNum < 5"></span>
  <span class="submit_item button_style" @click="changeHash" v-else></span>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "index",
  created() {
    this.$store.dispatch('asyncGetData')
  },
  data() {
    return {
      // 选中的索引
      chooseNum: null,
      // 选中的ID
      chooseId: null,
    }
  },
  methods: {
    choosed(index, id) {
      this.chooseNum = index;
      this.chooseId = id;
    },
    // 下一题功能
    nextItem() {
      if(this.chooseNum != null) {
        this.chooseNum = null;
        // 把选择的答案id传给addNum方法
        this.$store.dispatch('addNum',this.chooseId)
      } else {
        alert('您还没有选择答案哦')
      }
    },
    grade() {
      if(this.chooseNum != null) {
        this.chooseNum = null;
        // 把选择的答案id传给addNum方法
        this.$store.commit('grade')
      } else {
        alert('您还没有选择答案哦')
      }
    },
    changeHash() {
      this.$router.push('/score')
    }
  },
  computed: {
    ...mapState(['itemNum', 'questions']),
    itemTitle() {
      return this.questions[this.itemNum - 1].topic_name
    },
  },
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