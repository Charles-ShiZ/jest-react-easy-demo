# 使用 jest 和 @testing-library-react 测试 react 组件
## jest环境部署
### npm i jest -D
### npx jest --init
```
✔ Would you like to use Jest when running “test” script in “package.json”? yes
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? yes
✔ Which provider should be used to instrument code for coverage? › babel
✔ Automatically clear mock calls and instances between every test? yes
```
#### 为什么要选择jsdom，而不是node？

jsdom代表代码在浏览器环境下执行

#### 为什么要选择babel，而不是V8？

因为这个V8选项，似乎是实验性功能，来自[https://www.wenjiangs.com/doc/jestjs-cli#title-12]，默认选择babel吧


### 在项目根目录创建一个文件夹，通常命名为__test__，专门用于存放测试代码

### npm i typescript ts-node -D

### npm i @testing-library/jest-dom @testing-library/react -D

### npm test (or npx jest)