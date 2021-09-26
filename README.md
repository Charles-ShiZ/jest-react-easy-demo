# 使用 jest 和 @testing-library-react 测试 react 组件
## jest环境部署
1. 安装 jest

   `npm i jest -D`
2. 初始化 jest

   `npx jest --init`

    ```
    ✔ Would you like to use Typescript for the configuration file? yes
    ✔ Would you like to use Jest when running “test” script in “package.json”? yes
    ✔ Choose the test environment that will be used for testing › jsdom (browser-like)
    ✔ Do you want Jest to add coverage reports? yes
    ✔ Which provider should be used to instrument code for coverage? › babel
    ✔ Automatically clear mock calls and instances between every test? yes
    ```
    1. 为什么要选择 jsdom ，而不是 node ？
    
       因为 jsdom 代表代码在浏览器环境下执行

    2. 为什么要选择 babel ，而不是 V8 ？

       因为这个V8选项，似乎是实验性功能，来自https://www.wenjiangs.com/doc/jestjs-cli#title-12 ，所以默认选择babel吧

3. 在项目根目录创建一个文件夹，通常命名为__test__，专门用于存放测试代码

4. 安装 jest 的 ts 环境
   > 如果在`Would you like to use Typescript for the configuration file?` 选择了no，可以不安装
   
   `npm i typescript ts-node -D`

5. 安装 测试 react 组件的库

   `npm i @testing-library/jest-dom @testing-library/react -D`

6. 开始测试

   `npm test (or npx jest)`

Perfect !
