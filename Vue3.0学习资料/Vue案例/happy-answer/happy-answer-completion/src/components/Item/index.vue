<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ itemNum }}</span>
      </header>
    </section>
    <div class="item_back item_container_style">
      <div class="item_list_container" >
        <!-- 题干 -->
        <header class="item_title">我是题干</header>
        <!-- 选项 -->
        <ul>
          <li class="item_list">
            <span class="option_style">A</span>
            <span class="option_detail">答案a</span>
          </li>
          <li class="item_list">
            <span class="option_style">B</span>
            <span class="option_detail">答案b</span>
          </li>
          <li class="item_list">
            <span class="option_style">C</span>
            <span class="option_detail">答案c</span>
          </li>
          <li class="item_list">
            <span class="option_style">D</span>
            <span class="option_detail">答案d</span>
          </li>
        </ul>
      </div>
    </div>
    <span class="next_item button_style" v-if="itemNum < questions.length"></span>
    <span class="submit_item button_style" v-else ></span>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "index",
  computed:{

  ...mapState(['itemNum','questions'])
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