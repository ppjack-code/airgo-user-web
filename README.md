# airgo-user-web

AirGo 用户端

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![MIT License][license-shield]][license-url]

<p align="center">
  <a href="https://github.com/pura-panel/airgo-user-web/">
    <img src="https://raw.githubusercontent.com/pura-panel/pura-assets/main/logo-color.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">"完美的" AirGo用户端</h3>
  <p align="center">
    这是一个 "完美的" AirGo用户端项目！
    <br />
    <a href="https://github.com/pura-panel/airgo-user-web"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/pura-panel/airgo-user-web/issues">报告Bug</a>
    ·
    <a href="https://github.com/pura-panel/airgo-user-web/issues">提出新特性</a>
  </p>
</p>

## 目录

- [airgo-user-web](#airgo-user-web)
  - [目录](#目录)
    - [前言](#前言)
    - [上手指南](#上手指南)
      - [功能集成](#功能集成)
      - [命令说明](#命令说明)
    - [文件目录说明](#文件目录说明)
    - [开发的架构](#开发的架构)
    - [部署](#部署)
    - [贡献者](#贡献者)
      - [如何参与开源项目](#如何参与开源项目)
    - [版本控制](#版本控制)
    - [版权说明](#版权说明)

### 前言

- 此项目仅用作学习交流、研究之用，请勿用于商业用途，请在24小时内删除

### 上手指南

```sh
$ git clone https://github.com/pura-panel/airgo-user-web.git
# install dependencies
$ pnpm install # Or yarn install

# serve with hot reload at localhost:3000
$ pnpm dev

# build for production and launch server
$ pnpm run build
$ pnpm start
```

#### 功能集成

- Tailwind CSS (支持 pxtorem) 例如 h-[80px] 自动转换为 `height: 5rem`
- shadcn-ui
- 支持主题颜色、主题模式切换
- iconify (支持本地 svg 导入)
- react-query
- axios (API请求)
- valtio (状态管理)
- openapi (基于swagger json 生成 API请求)
- 国际化（i18next）
- 国际化文件自动生成 (@lobehub/i18n-cli)
- PWA (基于 next-pwa)
- 支持自动化部署到服务器
  - SSG
  - PM2
  - Docker
- 其它功能（app/components/scripts.tsx）
  - rem 自适应
  - 生产环境防 debugger
  - 百度统计
  - 谷歌统计
  - yandex 统计
  - facebook 统计

#### 命令说明

| Command (命令) | English Description | 中文描述 |
| --- | --- | --- |
| build | Build the Next.js project | 构建 Next.js 项目 |
| deps | Update dependencies | 更新依赖 |
| deps:diff | Check UI differences | 检查 UI 差异 |
| dev | Start the Next.js development server | 启动 Next.js 开发服务器 |
| icon | Generate icons using Iconify | 使用 Iconify 生成图标 |
| lint | Lint the Next.js project | 对 Next.js 项目进行代码检查 |
| locale | Generate local internationalization files (OPENAI_API_KEY in the env file needs to be configured) | 生成本地国际化文件 (需要配置env文件中的 OPENAI_API_KEY) |
| openapi | Generate OpenAPI types | 生成 OpenAPI 类型 |
| standalone | Build Next.js project independent output mode | 构建 Next.js 项目 独立输出模式 |
| start | Start the Next.js production server | 启动 Next.js 生产服务器 |

### 文件目录说明

```tree
nnext-template
├── ARCHITECTURE.md
├── Dockerfile
├── README.md
├── app
│   ├── [lng]
│   ├── robots.ts
│   └── sitemap.ts
├── components
├── components.json
├── i18n
├── lib
├── main.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── providers
│   ├── index.tsx
│   ├── react-query-provider.tsx
│   ├── scripts.tsx
│   └── theme-provider.tsx
├── public
├── scripts
│   ├── iconify
│   ├── locale
│   └── openapi
├── service
│   └── api
├── stores
│   └── config.ts
├── styles
│   └── globals.css
├── tailwind.config.ts
└── tsconfig.json
```

### 开发的架构

请阅读[ARCHITECTURE.md](https://github.com/pura-panel/airgo-user-web/blob/main/ARCHITECTURE.md) 查阅为该项目的架构。

### 部署

暂无

### 贡献者

请阅读[CONTRIBUTING.md](https://github.com/pura-panel/airgo-user-web/blob/main/CONTRIBUTING.md) 查阅为该项目做出贡献的开发者。

#### 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

<!-- ### 作者

xxx@xxxx

_您也可以在贡献者名单中参看所有参与该项目的开发者。_ -->

### 版权说明

该项目签署了 GPL-3.0 授权许可，详情请参阅 [LICENSE](https://github.com/pura-panel/airgo-user-web/blob/main/LICENSE)

<!-- ### 鸣谢

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [xxxxxxxxxxxxxx](https://connoratherton.com/loaders) -->

<!-- links -->

[contributors-shield]: https://img.shields.io/github/contributors/pura-panel/airgo-user-web.svg?style=flat-square
[contributors-url]: https://github.com/pura-panel/airgo-user-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/pura-panel/airgo-user-web.svg?style=flat-square
[forks-url]: https://github.com/pura-panel/airgo-user-web/network/members
[stars-shield]: https://img.shields.io/github/stars/pura-panel/airgo-user-web.svg?style=flat-square
[stars-url]: https://github.com/pura-panel/airgo-user-web/stargazers
[issues-shield]: https://img.shields.io/github/issues/pura-panel/airgo-user-web.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/pura-panel/airgo-user-web.svg
[license-shield]: https://img.shields.io/github/license/pura-panel/airgo-user-web.svg?style=flat-square
[license-url]: https://github.com/pura-panel/airgo-user-web/blob/main/LICENSE.txt
