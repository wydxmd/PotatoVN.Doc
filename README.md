# PotatoVN.Doc

> [potatovn.net](https://potatovn.net) 的源代码

## 本地运行
1. 确保你的电脑上已经安装了 [Node.js](https://nodejs.org/zh-cn/)
2. 克隆本仓库到本地
```
git clone https://github.com/GoldenPotato137/PotatoVN.Doc.git
```
3. 以下操作都应该在项目根目录下进行， 打开终端，输入以下命令安装依赖
```
npm install
```
在国内可能会遇到下载困难的问题，可以使用代理加速：
```
npm config set proxy http://server:port
# 例如： npm config set proxy http://127.0.0.1:7890
# 设置完成代理后输入 npm install安装依赖
```
4. 输入以下命令运行项目
```
npm run dev
```