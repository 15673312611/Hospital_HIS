
一个基于 React + TypeScript + Ant Design 的现代化价格管理系统，提供丰富的后台管理功能和美观的用户界面。

## 此项目只有前端实现 没有后端交互 如有相关需求可联系微信:soe303

## 🚀 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **UI组件库**: Ant Design 5.x
- **样式框架**: Tailwind CSS
- **状态管理**: Zustand
- **数据请求**: React Query + Axios
- **路由管理**: React Router 6
- **表单处理**: React Hook Form + Yup
- **图表库**: Ant Design Charts
- **代码规范**: ESLint + Prettier
- **组件文档**: Storybook

  **页面展示**
  ![image](https://github.com/user-attachments/assets/c1bd8c2f-5835-4046-9685-04a9d42305f4)
![image](https://github.com/user-attachments/assets/e4c2cb83-6880-4660-a76e-06ee9a8f1ee8)
![image](https://github.com/user-attachments/assets/cae09fc6-9922-4e59-91d6-c091f8acd309)


## 📁 项目结构

```
src/
├── components/          # 通用组件
│   └── Layout/         # 布局组件
├── pages/              # 页面组件
├── hooks/              # 自定义Hooks
├── utils/              # 工具函数
├── types/              # TypeScript类型定义
├── store/              # 状态管理
├── services/           # API服务
├── assets/             # 静态资源
└── styles/             # 样式文件
```

## 🛠️ 开发环境搭建

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

### 5. 代码检查

```bash
npm run lint
```

### 6. 启动Storybook

```bash
npm run storybook
```

## 🎨 功能特性

### 核心功能
- ✅ 仪表盘数据展示
- ✅ 价格管理（增删改查）
- ✅ 产品管理
- ✅ 客户管理
- ✅ 订单管理
- ✅ 报表分析
- ✅ 系统设置

### UI/UX特性
- 🎨 现代化设计风格
- 📱 响应式布局
- 🌙 支持主题切换
- ⚡ 快速加载
- 🔍 高级搜索和筛选
- 📊 数据可视化图表
- 🔔 实时通知系统

### 开发特性
- 🔧 TypeScript 类型安全
- 📝 完整的代码规范
- 🧪 组件文档和测试
- 🚀 热重载开发体验
- 📦 模块化架构设计

## 🎯 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd admin-price-system
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 访问应用

打开浏览器访问 `http://localhost:3000`

## 📚 开发指南

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.tsx` 中添加路由配置
3. 在 `src/components/Layout/Sidebar.tsx` 中添加菜单项

### 添加新组件

1. 在 `src/components/` 目录下创建组件
2. 使用 TypeScript 定义组件接口
3. 添加必要的样式和功能
4. 在 Storybook 中添加组件文档

### API集成

1. 在 `src/services/` 目录下创建API服务
2. 使用 React Query 进行数据管理
3. 在组件中使用 `useQuery` 和 `useMutation`

## 🎨 自定义主题

项目支持自定义主题配置，可以在以下文件中进行修改：

- `tailwind.config.js` - Tailwind CSS 配置
- `src/index.css` - 全局样式
- Ant Design 主题配置在 `src/main.tsx` 中

## 📦 部署

### 构建生产版本

```bash
npm run build
```

### 部署到服务器

将 `dist` 目录下的文件部署到你的Web服务器即可。

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 支持

如果你遇到任何问题或有任何建议，请：

1. 查看 [Issues](../../issues) 页面
2. 创建新的 Issue
3. 联系项目维护者

---

**享受开发！** 🎉 

**全栈开发 在线接单 微信:soe303**
