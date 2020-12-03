# 题库管理 - 标签管理

### 标签管理页路由

```js
// 标签管理
{
   path: "/question/label",
   component: () => import("@/views/QuestionLabel")
},
```

### 标签管理页模板

```html
<template>
  <a-layout-content>
  </a-layout-content>
</template>

```

#### 1. 引入面包屑组件

- 面包屑组件详情移至面包屑文档 

  [面包屑文档]: ./面包屑组件文档.md	"面包屑文档"

#### 2. 页头部分模板

```html
      <!-- 页头 start -->
      <!-- backIcon为false，不渲染返回按钮 -->
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="标签列表"
        :backIcon="false"
      >
        <template #extra>
          <!-- 添加标签按钮 -->
          <a-button type="primary" @click="showAddLabel">添加标签</a-button>
        </template>
      </a-page-header>
      <!-- 页头 end -->
      <!-- 添加标签 模态框 start -->
      <a-modal
        v-model:visible="addLabelVisible"
        title="添加标签"
        ok-text="确认"
        cancel-text="取消"
        @ok="addLabel(getLabels)"
        @cancel="cancelAddLabel"
      >
        <!-- 添加标签 表单 start -->
        <a-form :model="addLabelForm" :rules="addLabelRules" ref="addForm">
          <a-form-item label="标签名称" name="name">
            <!-- 标签名输入框 -->
            <a-input v-model:value="addLabelForm.name"> </a-input>
          </a-form-item>
        </a-form>
        <!-- 添加标签 表单 end -->
      </a-modal>
      <!-- 添加标签 模态框 end -->
```

##### 2.1 页头添加标签功能

```js
// 引入 添加标签功能
import { useAddLabel } from "./useAddLabel";
```

##### 2.2 定义添加标签功能接口

```js
// 题库标签管理接口配置
export default {
  // 获取标签列表
  GetLabels: "/question/label/list",
  // 添加标签
  AddLabel: "/question/label/add",
};
```

##### 2.3 定义添加标签功能文件

```js
//#region 添加标签
import { reactive, ref } from "vue";
// 导入接口配置
import questionLabel from "@/api/questionLabelAPI";
// 导入post请求
import { httpPost } from "@/utils/http";
// 引入提示框
import { message } from "ant-design-vue";

// 导出
export function useAddLabel() {
  // 添加标签模态框是否显示
  const addLabelVisible = ref(false);

  // 打开添加标签模态框
  const showAddLabel = () => {
    addLabelVisible.value = true;
  };

  // 添加标签表单
  const addLabelForm = reactive({
    name: ""
  });

  // 添加标签表单校验规则
  const addLabelRules = reactive({
    name: [
      { required: true, message: "请输入标签名", trigger: "blur" },
      { max: 5, message: "标签不能超过5个字", trigger: "blur" }
    ]
  });

  // 表单
  const addForm = ref(null);

  // 添加标签
  const addLabel = callback => {
    addForm.value
      .validate()
      .then(() => {
        // 发起添加请求
        httpPost(questionLabel.AddLabel, {
          name: addLabelForm.name
        }).then(res => {
          if (res.success == true) {
            // 提示用户添加成功
            message.success("添加标签成功");
            // 重置表单
            addForm.value.resetFields();
            // 关闭模态框
            addLabelVisible.value = false;
            // 刷新表单
            callback();
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 取消添加标签
  const cancelAddLabel = () => {
    addForm.value.resetFields();
  };

  return {
    addLabelVisible,
    showAddLabel,
    addLabel,
    addLabelForm,
    addLabelRules,
    addForm,
    cancelAddLabel
  };
}
//#endregion
```

##### 2.4 



