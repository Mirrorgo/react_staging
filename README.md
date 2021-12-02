# 常用snippet
* rcc
  * 类式组件的基础结构
* rfc
  * 函数式组件的基础结构

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
* 子组件想传递消息给父组件
父组件给子组件传递一个箭头函数

[开始讲一个:hover直接就能解决的悬浮高亮](https://www.bilibili.com/video/BV1wy4y1D7JT?p=59&t=133.5)



.reduce用于条件统计,非常有用

