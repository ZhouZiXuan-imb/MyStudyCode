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

##### 2.4 解构出添加标签的功能并返回

```js
    // 添加标签功能
    const {
      addLabelVisible,
      showAddLabel,
      addLabel,
      addLabelForm,
      addLabelRules,
      addForm,
      cancelAddLabel
    } = useAddLabel();

    return {
      //#region 添加标签功能
      // 添加标签模态框是否显示
      addLabelVisible,
      // 打开标签模态框
      showAddLabel,
      // 添加标签
      addLabel,
      // 取消添加标签
      cancelAddLabel,
      // 添加标签表单
      addLabelForm,
      // 添加标签表单校验规则
      addLabelRules,
      // 表单
      addForm,
      //#endregion
    };
```

#### 3. 标签列表部分模板

```html
<template>
  <a-layout-content>
    <!-- 主体Main start -->
    <div
      :style="{
        padding: '20px',
        background: '#fff',
        minHeight: '93%'
      }"
    >      
	  <!-- 标签管理表单 start -->
      <a-table
        bordered
        :columns="labelColumns"
        :dataSource="labelList"
        rowKey="id"
        :pagination="false"
      >
        <!-- 操作列 start -->
        <template #operation="{ record }">
          <div v-if="record.id <= 3 && record.id >= 1">不可操作</div>
          <div v-else>
            <!-- 修改按钮 -->
            <a-button
              type="primary"
              style="margin-right: 10px"
              @click="showUpdateLabel(record.id, record.name)"
            >
              <EditOutlined /> 修改
            </a-button>
            <!-- 删除按钮 -->
            <a-popconfirm
              title="您确定要删除这个标签吗？"
              ok-text="确定"
              cancel-text="取消"
              @confirm="delLabel(record.id, getLabels)"
            >
              <a-button type="danger"> <DeleteOutlined />删除 </a-button>
            </a-popconfirm>
          </div>
        </template>
        <!-- 操作列 end -->
      </a-table>
      <!-- 标签管理表单 end -->
      <!-- 修改标签模态框 start -->
      <a-modal
        v-model:visible="updateLabelVisible"
        title="修改标签"
        ok-text="确认"
        cancel-text="取消"
        @ok="updateLabel(getLabels)"
        @cancel="cancelUpdateLabel"
      >
        <!-- 修改标签 表单 start -->
        <a-form
          :model="updateLabelForm"
          :rules="updateLabelRules"
          ref="updateForm"
        >
          <a-form-item label="旧的标签名称" style="padding-left: 11px">
            <span>{{ updateLabelForm.oldName }}</span>
          </a-form-item>
          <a-form-item label="新的标签名称" name="name">
            <!-- 标签名输入框 -->
            <a-input v-model:value="updateLabelForm.name"> </a-input>
          </a-form-item>
        </a-form>
        <!-- 修改标签 表单 end -->
      </a-modal>
      <!-- 修改标签模态框 end -->
    </div>
    <!-- 主体Main end -->
  </a-layout-content>
</template>
```

##### 3.1 引入页面需要的icon图标

```js
// 引入icon图标
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";
```

##### 3.2 在components中导入需要的图标

```js
  components: {
    EditOutlined,
    DeleteOutlined,
    Crumbs
  }
```

##### 3.3 引入标签管理表单列配置

```js
// 引入 钩子函数
import { onMounted } from "vue";
// 引入 标签管理表单列配置
import { useLabelColumns } from "./useLableColumns";
// 引入 获取所有标签方法
import { useGetLabels } from "./useGetLables";
```

3.3.1 定义标签管理表单列配置文件 (QuestionLabel/useLableColumns.js)

```js
//#region 标签管理表格列配置
// 引入响应式API
import { reactive } from "vue";
// 导出
export function useLabelColumns() {
  // 标签管理列配置
  const labelColumns = reactive([
    {
      title: "标签名称",
      dataIndex: "name"
    },
    {
      title: "操作",
      key: "operation",
      slots: { customRender: "operation" }
    }
  ]);

  return {
    labelColumns
  };
}
//#endregion
```

3.3.2 定义获取所有标签方法文件 (QuestionLabel/useGetLables.js)

```js
//#region 获取所有标签
// 引入 响应式API
import { ref } from "vue";
// 引入get请求
import { httpGet } from "@/utils/http.js";
// 引入接口配置
import questionLabel from "@/api/questionLabelAPI";

export function useGetLabels() {
  // 声明 标签列表数据
  const labelList = ref([]);

  // 获取所有标签
  const getLabels = () => {
    httpGet(questionLabel.GetLabels).then(res => {
      if (res.success == true) {
        labelList.value = res.data;
      }
    });
  };

  return {
    getLabels,
    labelList
  };
}
//#endregion
```

##### 3.4 在setup中解构出标签管理表单列配置并返回

```js
  setup() {
    // 标签管理表单列配置
    const { labelColumns } = useLabelColumns();

    // 在mounted时候
    onMounted(() => {
      // 获取所有标签
      getLabels();
    });

    return {
      //#region 渲染标签列表
      // 标签管理表单列配置
      labelColumns,
      // 标签列表数据
      labelList,
      // 获取所有标签
      getLabels,
      //#endregion
  },
```

##### 3.5 引入删除标签功能文件

```js
// 引入 删除标签功能
import { useDelLabel } from "./useDelLabel";
```

3.5.1 定义接口文件 (api/questionLabelAPI.js)

```js
// 题库标签管理接口配置
export default {
  // 获取标签列表
  GetLabels: "/question/label/list",
  // 添加标签
  AddLabel: "/question/label/add",
  // 删除标签
  DelLabel: "/question/label/delete",
  // 修改标签
  UpdateLabel: "/question/label/update"
};
```

3.5.2 定义删除标签功能文件

```js
//#region 删除标签
// 引入post请求
import { httpDelete } from "@/utils/http";
// 引入接口配置
import questionLabel from "@/api/questionLabelAPI";
import { message } from "ant-design-vue";

export function useDelLabel() {
  /**
   * 删除标签方法
   * @param {*} id 要删除的id
   * @param {*} callback 回调函数
   */
  const delLabel = (id, callback) => {
    // 发起删除请求
    httpDelete(questionLabel.DelLabel + "/" + id).then(res => {
      if (res.success == true) {
        // 提示用户删除标签成功
        message.success("删除成功");
        // 刷新标签
        callback();
      }
    });
  };

  return {
    delLabel
  };
}
//#endregion
```

##### 3.6 在setup中解构出删除标签功能并返回

```js
  setup() {
    // 删除标签功能
    const { delLabel } = useDelLabel();
      
    return {
      // 删除标签
      delLabel,
    }
  }
```

##### 3.7  引入修改标签功能文件

```js
// 引入 修改标签功能
import { useUpdateLabel } from "./useUpdateLabel";
```

3.7.1 定义修改功能文件

```js
//#region 修改标签
import { ref, reactive } from "vue";
// 导入post请求方法
import { httpPost } from "@/utils/http";
// 导入接口配置
import questionLabel from "@/api/questionLabelAPI";
import { message } from "ant-design-vue";

export function useUpdateLabel() {
  // 添加标签模态框是否显示
  const updateLabelVisible = ref(false);

  // 添加标签表单
  const updateLabelForm = reactive({
    name: "",
    id: "",
    oldName: ""
  });

  // 打开添加标签模态框
  const showUpdateLabel = (id, name) => {
    updateLabelVisible.value = true;
    // 记录要修改的id和旧标签名
    updateLabelForm.id = id;
    updateLabelForm.oldName = name;
  };

  // 添加标签表单校验规则
  const updateLabelRules = reactive({
    name: [
      { required: true, message: "请输入标签名", trigger: "blur" },
      { max: 5, message: "标签不能超过5个字", trigger: "blur" }
    ]
  });

  // 表单
  const updateForm = ref(null);

  // 修改标签方法
  const updateLabel = callback => {
    // 校验
    updateForm.value
      .validate()
      .then(() => {
        // 发起修改请求
        httpPost(questionLabel.UpdateLabel, {
          id: updateLabelForm.id,
          name: updateLabelForm.name
        }).then(res => {
          if (res.success == true) {
            // 提示用户
            message.success("修改标签成功");
            // 重置表单
            updateForm.value.resetFields();
            // 关闭模态框
            updateLabelVisible.value = false;
            // 刷新表单
            callback();
          } else {
            message.error(res.message);
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 取消添加标签
  const cancelUpdateLabel = () => {
    updateForm.value.resetFields();
  };

  // 返回
  return {
    updateLabelVisible,
    showUpdateLabel,
    updateLabelForm,
    updateLabelRules,
    updateForm,
    updateLabel,
    cancelUpdateLabel
  };
}
//#endregion
```

##### 3.8 在setup中解构出修改标签功能并返回

```js
setup() {
    // 修改标签功能
    const {
      updateLabelVisible,
      showUpdateLabel,
      updateLabelForm,
      updateLabelRules,
      updateForm,
      updateLabel,
      cancelUpdateLabel
    } = useUpdateLabel();
    
   	// 返回
    return {
      //#region 修改标签
      // 修改标签模态框是否显示
      updateLabelVisible,
      // 打开修改标签模态框
      showUpdateLabel,
      // 修改标签表单数据
      updateLabelForm,
      // 修改标签规则
      updateLabelRules,
      // 修改标签表单
      updateForm,
      // 修改标签
      updateLabel,
      // 取消修改标签
      cancelUpdateLabel
      //#endregion
    };
}
```