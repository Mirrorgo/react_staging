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

[开始讲一个:hover直接就能解决的悬浮高亮](https://www.bilibili.com/video/BV1wy4y1D7JT?p=59&t=133.5)


数组操作的各种方法很重要
.reduce用于条件统计,非常有用

.filter
filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 

不要命名为delete,因为delete是关键字


实际开发中,很多程序员不对props做限制,因为时间紧,任务重
如何限制类型? yarn add prop-types