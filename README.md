# My All TODO
TODO
DONE
FIXME
BUG
NOTE
STAR
# 以已有页面为基础拆分组件并加入React框架

* 拆分组件,拆分界面,抽取组件
* 实现精要组件:使用组件实现静态页面效果
* 实现动态组件
  * 动态显示初始化数据
    * 数据类型
    * 数据名称
    * 保存在哪个组件
  * 交互(从绑定监听事件开始)

需要注意的点
* 可能根据id设置了样式
* 把class批量替换为className
  * 为了防止误操作, 将 class= 替换为className=
* JSX内的style得用 {{}} 包裹,且key-value的value部分需要用 '' 包裹
  * 比如 style="display:none" 替换为style={{ display: "none" }}
* 样式先不拆分,直接复制过来,更名为App.css
  * 先保证程序能正常跑起来再说
* import规则
  * 成型的第三方的包先引入,然后是自己的包,最底下是样式的引入

# 组件间信息传递
* 父组件给子组件传递消息:通过props传递
* 子组件想传递消息给父组件:通过props传递一个函数

# 注意defaultChecked和checked的区别
# 状态在哪,操作状态的方法就在哪
仅仅是增删改查的标准?



数组操作的各种方法很重要
.reduce用于条件统计,非常有用

.filter
filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 

不要命名为delete,因为delete是关键字


实际开发中,很多程序员不对props做限制,因为时间紧,任务重
如何限制类型? yarn add prop-types


# axios
## 前置知识
* promise
* AJAX

todo
搭建json-server


# 配置代理的方式(解决跨域问题)
react脚手架配置代理总结
## 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）
## 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：
1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

第三方成型的样式库一般在public下单独建一个文件夹css放,然后在index.html中引入

https://juejin.cn/post/6844903809274085389


连续解构赋值的写法
```
const {
      keyWordElement: { value },
    } = this;
```

等价于
const {value} = this.keyWordElement





# 消息订阅模式
消息订阅的库:PubSub    github上可找到
```
yarn add pubsub-js
```


xhr   XMLHttpRequest()


jQuery和axios都是对xhr的封装
jQuery容易形成回调地狱，axios是promise风格的


fetch和xhr是并列的
fetch是自带的，而且本身也是promise风格
[关于fetch](https://www.bilibili.com/video/BV1wy4y1D7JT?p=72&spm_id_from=pageDriver)
fetch不错，但对于部分老版本浏览器不兼容

# React路由
SPA（Single page web application） 单页应用
* 整个应用只有一个完整页面
* 通过ajax获取数据，前端异步实现
* 点击链接不会刷新页面，仅作局部更新

前端路由
* 浏览器路由，key是path,value是component,用于展示页面内容
* 注册路由：<Route path="/test" component={Test}> 
* 工作过程:当浏览器的path变成/test时,当前路由组件就会变为Test组件


浏览器的历史记录是一个栈的结构
操作history的两种方式
* 方法一,直接使用h5推出的history上的API(老浏览器可能不支持)
* 方法二,使用hash值(锚点),(也就是#页面内跳转的那个东西)

react-router有三种,包括针对web的,针对react native的,通用的
这里学的是针对web的,比通用的更简单.也可以叫react-router-dom

使用react-router-dom `yarn add react-router-dom`


