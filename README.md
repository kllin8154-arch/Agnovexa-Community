# Agnovexa Community

Agnovexa 的公开资源目录，协议为 `agnovexa.community/1`。

目录接口：https://kllin8154-arch.github.io/Agnovexa-Community/catalog.json

首批 19 项：4 个原创助理、3 个原创单文件技能、5 个 MCP、4 个模型与 3 个服务商。每项保留官方来源、许可或服务条件。原创内容使用 MIT；第三方品牌、软件、模型权重和托管服务仍遵循各自许可。本仓库不镜像第三方模型权重或应用程序。目录版本只描述收录快照，固定 MCP 版本在相应配置中列明。

目录可被匿名读取；不接收用户文件、聊天记录、密钥或遥测。浏览目录不代表已安装、已授权或已运行。需要密钥的资源由用户在自己的 Agnovexa 中配置。

## 维护

编辑 `catalog.json`，保持同类型 identifier 唯一、来源为 HTTPS、技能 content 与 sha256 匹配。运行 `node scripts/validate.mjs`。Pages 从 `kllin/community-catalog` 分支根目录发布。回退时恢复上一份已验证提交，再等待 Pages 构建完成。客户端会校验协议并在服务不可用时使用随版本发布的离线快照。

本仓库只发布资源目录和原创模板，不包含 Agnovexa 私有应用源码、用户资料或开发记录。
