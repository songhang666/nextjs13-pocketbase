## Next 13 + Pocketbase

### 使用Next.js 13 和 Pocketbase构建一个带有增加和查寻功能的笔记应用demo 

[nextjs](https://nextjs.org)
![](https://s3.bmp.ovh/imgs/2023/02/17/1f3ad094668983f9.gif)

### 本应用构建的步骤

1. 创建一个nextjs应用:
`npx create-next-app@latest --ts`

2. 从 [pocketbase.io](pocketbase.io)下载对应的执行文件
   
3. 把执行文件放置于项目根目录下
4. 启动Pocketbase:
`./pocketbase serve`
1. 打开 [Admin UI](http://127.0.0.1:8090/_/), 创建集合, 并且更新安全策略 to allow read/write access(允许读写权限) 
2. 把 `experimental: { appDir: true }` 添加到 `next.config.js`文件里