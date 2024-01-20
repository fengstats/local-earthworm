# EarthWorm

用连词构句法学习英语

## 如何开始

根据以下步骤启动项目

⚠️ 请注意，此项目依赖于 Docker 和 MySQL，因此请确保首先使用启动 Docker。

0. 如果您想在本地通过 Docker 单独启动 MySQL 进行调试

   ```shell
   pnpm docker:mysql
   ```

1. 安装项目依赖

   ```shell
   pnpm install
   ```

2. 启动项目

   ```shell
   pnpm docker:start
   ```

3. 停止项目

   ```shell
   pnpm docker:stop
   ```

4. 初始化数据库数据（只需在第一次创建数据库时执行）

   ```shell
   pnpm db:init
   ```
