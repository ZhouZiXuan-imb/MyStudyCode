<template>
  <div id="components-layout-demo-basic">
    <a-row>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
      <a-col :span="1">
        col-1
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="5" :offset="10">登录</a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}

.ant-col {
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
