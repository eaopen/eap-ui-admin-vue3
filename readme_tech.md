# EAP-UI-Admin-Vue3 技术文档

## 📋 项目概述

EAP-UI-Admin-Vue3 是一个基于 Vue 3 + TypeScript + Element Plus 构建的现代化企业级管理后台前端项目。项目基于 ui-admin-vue3 进行二次开发，采用最新的前端技术栈，为企业应用提供完整的管理界面解决方案。

### 核心特性

- 🚀 **现代化技术栈**: Vue 3 + TypeScript + Vite + Element Plus
- 🎨 **丰富的组件库**: 50+ 高质量业务组件
- 🔐 **完善的权限系统**: RBAC 权限模型，支持多租户
- 🌍 **国际化支持**: 完整的 i18n 解决方案
- 📱 **响应式设计**: 支持多种布局模式和移动端适配
- ⚡ **性能优化**: 代码分割、懒加载、Tree Shaking
- 🛠️ **开发友好**: 完善的开发工具链和代码规范

## 🛠️ 技术栈

### 核心框架

| 技术 | 版本 | 说明 |
|------|------|------|
| [Vue](https://vuejs.org/) | 3.4.21 | 渐进式 JavaScript 框架 |
| [TypeScript](https://www.typescriptlang.org/) | 5.3.3 | JavaScript 的超集，提供静态类型检查 |
| [Vite](https://vitejs.dev/) | 5.4.21 | 现代化构建工具 |
| [Element Plus](https://element-plus.org/) | 2.11.1 | 基于 Vue 3 的组件库 |

### 状态管理与路由

| 技术 | 版本 | 说明 |
|------|------|------|
| [Pinia](https://pinia.vuejs.org/) | 2.1.7 | Vue 3 官方推荐的状态管理库 |
| [Vue Router](https://router.vuejs.org/) | 4.3.0 | Vue 官方路由管理器 |
| [pinia-plugin-persistedstate](https://github.com/prazdevs/pinia-plugin-persistedstate) | 3.2.1 | Pinia 状态持久化插件 |

### 样式与UI增强

| 技术 | 版本 | 说明 |
|------|------|------|
| [UnoCSS](https://unocss.dev/) | 0.58.5 | 原子化 CSS 引擎 |
| [Sass](https://sass-lang.com/) | 1.69.5 | CSS 预处理器 |
| [Animate.css](https://animate.style/) | 4.1.1 | CSS 动画库 |
| [@iconify/iconify](https://iconify.design/) | 3.1.1 | 统一的图标框架 |

### 工具库

| 技术 | 版本 | 说明 |
|------|------|------|
| [VueUse](https://vueuse.org/) | 10.9.0 | Vue Composition API 工具集 |
| [Lodash-es](https://lodash.com/) | 4.17.21 | JavaScript 实用工具库 |
| [Axios](https://axios-http.com/) | 1.12.0 | HTTP 客户端 |
| [Day.js](https://day.js.org/) | 1.11.10 | 轻量级日期处理库 |

### 业务功能库

| 技术 | 版本 | 说明 |
|------|------|------|
| [@wangeditor/editor](https://www.wangeditor.com/) | 5.1.23 | 富文本编辑器 |
| [ECharts](https://echarts.apache.org/) | 5.5.0 | 数据可视化图表库 |
| [BPMN.js](https://bpmn.io/) | 8.9.0 | 工作流设计器 |
| [@form-create/element-ui](https://www.form-create.com/) | 3.1.24 | 动态表单生成器 |
| [CropperJS](https://fengyuanchen.github.io/cropperjs/) | 1.6.1 | 图片裁剪库 |

## 🏗️ 架构设计

### 整体架构

```
┌─────────────────────────────────────────────────────────────┐
│                        Presentation Layer                   │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │   Layout    │ │ Components  │ │        Views            │ │
│  │   System    │ │   Library   │ │      (Pages)            │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                        Business Layer                       │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │   Router    │ │    Store    │ │         API             │ │
│  │   System    │ │  (Pinia)    │ │      Services           │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                         Utils Layer                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │   Utils     │ │ Directives  │ │        Plugins          │ │
│  │ Functions   │ │             │ │                         │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 目录结构

```
src/
├── api/                    # API 接口管理
│   ├── login/             # 登录相关接口
│   ├── system/            # 系统管理接口
│   ├── infra/             # 基础设施接口
│   ├── bpm/               # 工作流接口
│   ├── crm/               # 客户关系管理接口
│   ├── erp/               # 企业资源规划接口
│   ├── mall/              # 商城接口
│   ├── member/            # 会员接口
│   ├── mp/                # 微信公众号接口
│   └── pay/               # 支付接口
├── assets/                 # 静态资源
│   ├── imgs/              # 图片资源
│   ├── map/               # 地图数据
│   └── svgs/              # SVG 图标
├── components/             # 全局组件库
│   ├── Table/             # 表格组件
│   ├── Dialog/            # 对话框组件
│   ├── Form/              # 表单组件
│   ├── Icon/              # 图标组件
│   ├── Editor/            # 编辑器组件
│   ├── Echart/            # 图表组件
│   ├── bpmnProcessDesigner/ # BPMN 流程设计器
│   └── ...                # 其他业务组件
├── config/                 # 配置文件
│   └── axios/             # HTTP 请求配置
├── directives/             # 自定义指令
│   ├── index.ts           # 指令入口
│   └── permission/        # 权限指令
├── hooks/                  # 组合式函数
│   ├── event/             # 事件相关 hooks
│   └── web/               # Web API hooks
├── layout/                 # 布局组件
│   ├── Layout.vue         # 主布局
│   └── components/        # 布局子组件
├── locales/                # 国际化配置
│   ├── en.ts              # 英文语言包
│   └── zh-CN.ts           # 中文语言包
├── plugins/                # 插件配置
│   ├── elementPlus/       # Element Plus 配置
│   ├── unocss/            # UnoCSS 配置
│   ├── vueI18n/           # 国际化配置
│   └── ...                # 其他插件
├── router/                 # 路由配置
│   ├── index.ts           # 路由入口
│   └── modules/           # 路由模块
├── store/                  # 状态管理
│   ├── index.ts           # Store 入口
│   └── modules/           # Store 模块
├── styles/                 # 全局样式
│   ├── index.scss         # 样式入口
│   ├── variables.scss     # SCSS 变量
│   └── theme.scss         # 主题样式
├── types/                  # TypeScript 类型定义
│   ├── components.d.ts    # 组件类型
│   ├── form.d.ts          # 表单类型
│   └── ...                # 其他类型定义
├── utils/                  # 工具函数
│   ├── auth.ts            # 认证工具
│   ├── dict.ts            # 字典工具
│   ├── permission.ts      # 权限工具
│   └── ...                # 其他工具
├── views/                  # 页面组件
│   ├── Login/             # 登录页面
│   ├── Home/              # 首页
│   ├── system/            # 系统管理页面
│   ├── infra/             # 基础设施页面
│   └── ...                # 其他业务页面
├── App.vue                 # 根组件
├── main.ts                 # 应用入口
└── permission.ts           # 权限控制
```

## 🔧 核心功能模块

### 1. 权限管理系统

#### RBAC 权限模型
- **用户 (User)**: 系统操作者
- **角色 (Role)**: 权限的集合
- **权限 (Permission)**: 具体的操作权限
- **菜单 (Menu)**: 页面访问权限

#### 权限控制实现
```typescript
// 路由守卫
router.beforeEach(async (to, from, next) => {
  // Token 验证
  const token = getToken()
  if (!token) {
    next('/login')
    return
  }
  
  // 权限验证
  const hasPermission = await checkPermission(to.path)
  if (!hasPermission) {
    next('/403')
    return
  }
  
  next()
})

// 按钮权限指令
app.directive('hasPermi', {
  mounted(el, binding) {
    const { value } = binding
    const permissions = useUserStore().permissions
    
    if (!permissions.includes(value)) {
      el.parentNode?.removeChild(el)
    }
  }
})
```

### 2. 布局系统

#### 多布局模式
- **Classic**: 经典左侧菜单布局
- **TopLeft**: 顶部 + 左侧混合布局
- **Top**: 顶部菜单布局
- **CutMenu**: 分割菜单布局

#### 响应式设计
```typescript
// 布局配置
interface LayoutConfig {
  layout: 'classic' | 'topLeft' | 'top' | 'cutMenu'
  theme: 'light' | 'dark'
  primaryColor: string
  menuCollapse: boolean
  breadcrumb: boolean
  tabs: boolean
}

// 响应式断点
const breakpoints = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
}
```

### 3. 状态管理 (Pinia)

#### Store 模块设计
```typescript
// 用户状态
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    userInfo: null,
    roles: [],
    permissions: []
  }),
  
  actions: {
    async login(loginForm) {
      const { data } = await loginApi(loginForm)
      this.token = data.accessToken
      setToken(data.accessToken)
    },
    
    async getUserInfo() {
      const { data } = await getUserInfoApi()
      this.userInfo = data
      this.roles = data.roles
      this.permissions = data.permissions
    }
  },
  
  persist: {
    key: 'user-store',
    storage: localStorage,
    paths: ['token', 'userInfo']
  }
})
```

### 4. HTTP 请求封装

#### Axios 配置
```typescript
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 添加 Token
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // 添加租户ID
    const tenantId = getTenantId()
    if (tenantId) {
      config.headers['tenant-id'] = tenantId
    }
    
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { code, data, msg } = response.data
    
    if (code === 200) {
      return data
    } else if (code === 401) {
      // Token 过期处理
      useUserStore().logout()
      router.push('/login')
    } else {
      ElMessage.error(msg || '请求失败')
      return Promise.reject(new Error(msg))
    }
  },
  (error) => {
    ElMessage.error(error.message || '网络错误')
    return Promise.reject(error)
  }
)
```

### 5. 组件库

#### 高级表格组件
```vue
<template>
  <XTable
    :columns="columns"
    :data="tableData"
    :loading="loading"
    :pagination="pagination"
    @refresh="getList"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
    <template #toolbar>
      <XButton type="primary" @click="handleAdd">
        <Icon icon="ep:plus" class="mr-5px" />
        新增
      </XButton>
    </template>
  </XTable>
</template>
```

#### 动态表单组件
```vue
<template>
  <XForm
    :schema="formSchema"
    :model="formData"
    :rules="formRules"
    @submit="handleSubmit"
  />
</template>

<script setup lang="ts">
const formSchema = [
  {
    field: 'name',
    label: '用户名',
    component: 'Input',
    required: true
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'Input',
    componentProps: {
      type: 'email'
    }
  }
]
</script>
```

## ⚙️ 开发环境配置

### 环境要求

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.6.0 (强制使用)
- **Git**: 最新版本

### 快速开始

```bash
# 1. 克隆项目
git clone https://github.com/eaopen/eap-ui-admin-vue3.git
cd eap-ui-admin-vue3

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 打开浏览器访问
# http://localhost:80
```

### 环境变量配置

#### 开发环境 (.env.dev)
```bash
# 后端 API 地址
VITE_BASE_URL='http://api-dashboard.yudao.iocoder.cn'

# 文件上传配置
VITE_UPLOAD_TYPE=server
VITE_UPLOAD_URL='http://api-dashboard.yudao.iocoder.cn/admin-api/infra/file/upload'

# 调试配置
VITE_DROP_DEBUGGER=false
VITE_DROP_CONSOLE=false
VITE_SOURCEMAP=true
```

#### 生产环境 (.env.prod)
```bash
# 后端 API 地址
VITE_BASE_URL='http://localhost:48080'

# 文件上传配置
VITE_UPLOAD_TYPE=server
VITE_UPLOAD_URL='http://localhost:48080/admin-api/infra/file/upload'

# 优化配置
VITE_DROP_DEBUGGER=true
VITE_DROP_CONSOLE=true
VITE_SOURCEMAP=false
VITE_OUT_DIR=dist-prod
```

### IDE 配置

#### VS Code 推荐插件
```json
{
  "recommendations": [
    "Vue.volar",
    "antfu.unocss",
    "antfu.iconify",
    "lokalise.i18n-ally",
    "stylelint.vscode-stylelint",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "mikestead.dotenv"
  ]
}
```

#### VS Code 设置
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 🚀 构建和部署

### 构建命令

```bash
# 开发环境构建
pnpm build:dev

# 测试环境构建
pnpm build:test

# 预发布环境构建
pnpm build:stage

# 生产环境构建
pnpm build:prod

# 本地构建并预览
pnpm preview
```

### 构建优化

#### Vite 配置优化
```typescript
export default defineConfig({
  build: {
    // 代码分割
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        manualChunks: {
          'element-plus': ['element-plus'],
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'utils': ['lodash-es', 'dayjs', 'axios']
        }
      }
    },
    
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    
    // 文件大小限制
    chunkSizeWarningLimit: 1000
  }
})
```

### Docker 部署

#### Dockerfile
```dockerfile
# 构建阶段
FROM node:18-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN pnpm build:prod

# 生产阶段
FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist-prod /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Nginx 配置
```nginx
server {
    listen 80;
    server_name localhost;
    
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
    
    location /admin-api/ {
        proxy_pass http://backend:48080/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    
    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## ✨ 技术特性和亮点

### 1. 现代化开发体验

#### TypeScript 全面支持
- 完整的类型定义
- 智能代码提示
- 编译时错误检查
- 更好的重构支持

#### Composition API
```typescript
// 逻辑复用示例
export function useTable<T = any>() {
  const loading = ref(false)
  const tableData = ref<T[]>([])
  const pagination = reactive({
    page: 1,
    size: 10,
    total: 0
  })
  
  const getList = async (params?: any) => {
    loading.value = true
    try {
      const { list, total } = await api.getList({
        ...params,
        page: pagination.page,
        size: pagination.size
      })
      tableData.value = list
      pagination.total = total
    } finally {
      loading.value = false
    }
  }
  
  return {
    loading,
    tableData,
    pagination,
    getList
  }
}
```

### 2. 性能优化策略

#### 代码分割和懒加载
```typescript
// 路由懒加载
const routes = [
  {
    path: '/system',
    component: () => import('@/views/system/index.vue'),
    children: [
      {
        path: 'user',
        component: () => import('@/views/system/user/index.vue')
      }
    ]
  }
]

// 组件懒加载
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  loadingComponent: Loading,
  errorComponent: Error,
  delay: 200,
  timeout: 3000
})
```

#### 虚拟滚动
```vue
<template>
  <VirtualList
    :data="largeDataSet"
    :item-height="50"
    :container-height="400"
  >
    <template #default="{ item, index }">
      <div class="list-item">{{ item.name }}</div>
    </template>
  </VirtualList>
</template>
```

### 3. 开发工具链

#### ESLint + Prettier 配置
```javascript
// .eslintrc.js
module.exports = {
  extends: [
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'vue/multi-word-component-names': 'off'
  }
}
```

#### 自动导入配置
```typescript
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: true
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true
    })
  ]
})
```

## 📝 开发规范和最佳实践

### 1. 代码规范

#### 命名规范
```typescript
// 文件命名：kebab-case
user-management.vue
user-detail.vue

// 组件命名：PascalCase
export default defineComponent({
  name: 'UserManagement'
})

// 变量命名：camelCase
const userName = ref('')
const userList = ref([])

// 常量命名：SCREAMING_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com'
const MAX_RETRY_COUNT = 3
```

#### 组件设计原则
```vue
<!-- 单一职责原则 -->
<template>
  <div class="user-card">
    <UserAvatar :src="user.avatar" />
    <UserInfo :user="user" />
    <UserActions @edit="handleEdit" @delete="handleDelete" />
  </div>
</template>

<script setup lang="ts">
// Props 定义
interface Props {
  user: User
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false
})

// Emits 定义
interface Emits {
  edit: [user: User]
  delete: [userId: string]
}

const emit = defineEmits<Emits>()
</script>
```

### 2. API 设计规范

#### 接口定义
```typescript
// types/api.ts
export interface ApiResponse<T = any> {
  code: number
  data: T
  msg: string
}

export interface PageResult<T = any> {
  list: T[]
  total: number
}

// api/user.ts
export const userApi = {
  // 获取用户列表
  getList: (params: UserQueryParams): Promise<PageResult<User>> => {
    return request.get('/system/user/page', { params })
  },
  
  // 获取用户详情
  getDetail: (id: string): Promise<User> => {
    return request.get(`/system/user/get?id=${id}`)
  },
  
  // 创建用户
  create: (data: UserCreateForm): Promise<string> => {
    return request.post('/system/user/create', data)
  },
  
  // 更新用户
  update: (data: UserUpdateForm): Promise<void> => {
    return request.put('/system/user/update', data)
  },
  
  // 删除用户
  delete: (id: string): Promise<void> => {
    return request.delete(`/system/user/delete?id=${id}`)
  }
}
```

### 3. 状态管理规范

#### Store 设计
```typescript
// stores/modules/user.ts
export const useUserStore = defineStore('user', () => {
  // State
  const userInfo = ref<User | null>(null)
  const permissions = ref<string[]>([])
  
  // Getters
  const isAdmin = computed(() => {
    return userInfo.value?.roles?.includes('admin') ?? false
  })
  
  const hasPermission = computed(() => {
    return (permission: string) => permissions.value.includes(permission)
  })
  
  // Actions
  const setUserInfo = (user: User) => {
    userInfo.value = user
  }
  
  const setPermissions = (perms: string[]) => {
    permissions.value = perms
  }
  
  const logout = async () => {
    await authApi.logout()
    userInfo.value = null
    permissions.value = []
    removeToken()
    router.push('/login')
  }
  
  return {
    // State
    userInfo,
    permissions,
    // Getters
    isAdmin,
    hasPermission,
    // Actions
    setUserInfo,
    setPermissions,
    logout
  }
}, {
  persist: {
    key: 'user-store',
    storage: localStorage,
    paths: ['userInfo']
  }
})
```

### 4. 错误处理规范

#### 全局错误处理
```typescript
// utils/errorHandler.ts
export class ApiError extends Error {
  constructor(
    public code: number,
    public message: string,
    public data?: any
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export const errorHandler = {
  // HTTP 错误处理
  handleHttpError: (error: AxiosError) => {
    const { response } = error
    
    if (response) {
      switch (response.status) {
        case 401:
          ElMessage.error('登录已过期，请重新登录')
          useUserStore().logout()
          break
        case 403:
          ElMessage.error('没有权限访问该资源')
          break
        case 404:
          ElMessage.error('请求的资源不存在')
          break
        case 500:
          ElMessage.error('服务器内部错误')
          break
        default:
          ElMessage.error('网络错误，请稍后重试')
      }
    } else {
      ElMessage.error('网络连接失败')
    }
  },
  
  // 业务错误处理
  handleBusinessError: (error: ApiError) => {
    ElMessage.error(error.message)
    
    // 记录错误日志
    console.error('Business Error:', {
      code: error.code,
      message: error.message,
      data: error.data,
      stack: error.stack
    })
  }
}
```

### 5. 测试规范

#### 单元测试
```typescript
// tests/components/UserCard.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UserCard from '@/components/UserCard.vue'

describe('UserCard', () => {
  const mockUser = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://example.com/avatar.jpg'
  }
  
  it('renders user information correctly', () => {
    const wrapper = mount(UserCard, {
      props: { user: mockUser }
    })
    
    expect(wrapper.text()).toContain(mockUser.name)
    expect(wrapper.text()).toContain(mockUser.email)
    expect(wrapper.find('img').attributes('src')).toBe(mockUser.avatar)
  })
  
  it('emits edit event when edit button is clicked', async () => {
    const wrapper = mount(UserCard, {
      props: { user: mockUser }
    })
    
    await wrapper.find('[data-test="edit-btn"]').trigger('click')
    
    expect(wrapper.emitted('edit')).toBeTruthy()
    expect(wrapper.emitted('edit')?.[0]).toEqual([mockUser])
  })
})
```

## 🔍 常见问题和解决方案

### 1. 开发环境问题

#### Node.js 版本兼容性
```bash
# 检查 Node.js 版本
node --version

# 如果版本过低，建议使用 nvm 管理
nvm install 18
nvm use 18
```

#### 依赖安装问题
```bash
# 清除缓存
pnpm store prune

# 重新安装依赖
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### 2. 构建部署问题

#### 内存不足
```bash
# 增加 Node.js 内存限制
node --max_old_space_size=8192 ./node_modules/vite/bin/vite.js build
```

#### 路径问题
```typescript
// vite.config.ts
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'static'
  }
})
```

### 3. 性能优化

#### 首屏加载优化
```typescript
// 路由懒加载
const routes = [
  {
    path: '/dashboard',
    component: () => import(
      /* webpackChunkName: "dashboard" */ 
      '@/views/dashboard/index.vue'
    )
  }
]

// 组件预加载
const preloadComponent = () => {
  import('@/components/HeavyComponent.vue')
}

// 在合适的时机预加载
onMounted(() => {
  setTimeout(preloadComponent, 2000)
})
```


