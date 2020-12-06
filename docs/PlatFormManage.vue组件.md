# 公告管理页组件

### 公告管理页路由

```js
// 公告
{
   path: "/platform/notice",
   component: () => import("@/views/PlatFormManage")
},
```

### 公告管理页模板

```html
<template>
  <a-layout-content>
  </a-layout-content>
</template>
```

#### 1. 引入面包屑组件

- 面包屑组件详情移至面包屑文档 

  [面包屑文档]: ./面包屑组件文档.md	"面包屑文档"

#### 2. 页头查询部分模板

```html
      <!-- 查询 start -->
      <div class="query border">
        <a-row>
          <a-col :span="5" :offset="1">
            <a-row>
              <a-col :span="6" class="right">
                <span>输入查询：</span>
              </a-col>
              <a-col :span="18">
                <a-input v-model:value="inputQuery" placeholder="公告标题" />
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="5" :offset="1">
            <a-row>
              <a-col :span="6" class="right">
                <span>公告状态：</span>
              </a-col>
              <a-col :span="18">
                <a-select v-model:value="noticeStatus" placeholder="全部">
                  <a-select-option value="1"> 已发布 </a-select-option>
                  <a-select-option value="0"> 已结束 </a-select-option>
                </a-select>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="5" :offset="1">
            <a-row>
              <a-col :span="6" class="right">
                <span>对象：</span>
              </a-col>
              <a-col :span="18">
                <a-input v-model:value="noticeObj" placeholder="全部" />
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="3" :offset="2">
            <a-row>
              <a-col :span="12">
                <a-button type="primary" @click="inquire(getData)">
                  查询
                </a-button>
              </a-col>
              <a-col :span="12">
                <a-button @click="reset(getData)">重置</a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
      <!-- 查询 end -->
```

