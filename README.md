# React TypeScript H5项目

这是一个基于React和TypeScript的H5移动端项目，首页显示"请通过分享海报进行注册"。

## 项目特性

- ✅ React 18 + TypeScript
- ✅ Webpack 5 构建配置
- ✅ 移动端响应式设计
- ✅ 现代化UI设计
- ✅ 开发和生产环境配置

## 项目结构

```
react-h5-project/
├── public/
│   └── index.html          # HTML模板
├── src/
│   ├── components/         # React组件
│   ├── styles/            # 样式文件
│   │   ├── index.css      # 全局样式
│   │   └── App.css        # 组件样式
│   ├── App.tsx            # 主应用组件
│   └── index.tsx          # 入口文件
├── dist/                  # 构建输出目录
├── package.json           # 项目配置
├── tsconfig.json          # TypeScript配置
└── webpack.config.js      # Webpack配置
```

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm start
# 或
npm run dev
```
项目将在 http://localhost:3000 启动

### 生产构建
```bash
npm run build
```
构建文件将输出到 `dist/` 目录

## 功能说明

- **首页展示**: 显示"请通过分享海报进行注册"的提示信息
- **响应式设计**: 适配各种移动设备屏幕尺寸
- **现代化UI**: 使用渐变色彩和动画效果
- **交互按钮**: 提供"获取分享海报"和"扫码注册"按钮

## 技术栈

- **React 18**: 前端框架
- **TypeScript**: 类型安全的JavaScript
- **Webpack 5**: 模块打包工具
- **CSS3**: 现代化样式设计

## 浏览器支持

- iOS Safari 10+
- Android Chrome 60+
- 其他现代移动浏览器

## 开发说明

项目已配置好完整的开发环境，包括：
- TypeScript类型检查
- 热重载开发服务器
- 生产环境优化构建
- 移动端适配

直接运行 `npm start` 即可开始开发！
