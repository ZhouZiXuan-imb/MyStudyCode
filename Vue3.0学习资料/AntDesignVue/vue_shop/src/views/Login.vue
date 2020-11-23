<template>
  <a-layout>
    <a-layout-content>
      <div class="login_container">
        <!-- 登录框 -->
        <a-card style="width: 300px">
          <!-- logo -->
          <a-avatar :size="130" icon="user" src="/image/logo.png" />
          <a-form>
            <a-row>
              <a-col :span="24">
                <a-form-item :wrapperCol="{ span: 24 }">
                  <a-input placeholder="Username">
                    <template #prefix
                      ><user-outlined style="color:rgba(0,0,0,.25)"
                    /></template>
                  </a-input>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="24">
                <a-form-item :wrapperCol="{ span: 24 }">
                  <a-input type="password" placeholder="Password">
                    <template #prefix
                      ><lock-outlined style="color:rgba(0,0,0,.25)"
                    /></template>
                  </a-input>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="6">
                <a-row></a-row>
                <a-form-item>
                  <a-button type="primary" html-type="submit">
                    登录
                  </a-button>
                </a-form-item>
              </a-col>

              <a-col :span="6" :offset="12">
                <a-row></a-row>
                <a-form-item>
                  <a-button type="primary" html-type="submit">
                    重置
                  </a-button>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
    LockOutlined
  }
};
</script>

<style>
.ant-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* height: 100px; */
}

.ant-card-body {
  /* height: 200px; */
}

.ant-layout {
  height: 100%;
}

.login_container {
  background: #2b5b6b;
  height: 100%;
  background-image: url("/image/background.a568162c.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}

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

.ant-avatar {
  /* padding: 10px; */
  position: absolute;
  top: -90px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 10px #ddd;
  border: 10px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: content-box;
  background-color: #eee;
}

.ant-avatar img {
  border-radius: 50%;
  background-color: #eee;
}
</style>
