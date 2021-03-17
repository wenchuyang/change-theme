# change-theme
用各种技术实现的一个简单的主题颜色修改功能

## javascript
原生 js 和 css ，主要使用 css 的变量来实现。
在点击按钮之后，修改 body 的 class ，因为特定类型的 class 下给不同的 color 变量赋了不同的值，而彩虹圈内的颜色使用的是颜色变量变量，所以彩虹圈会随之变色。

## react
[在线运行点这里](https://codesandbox.io/s/interesting-frog-ugk91?file=/src/App.js)
使用 react 框架实现的主题颜色修改，和上边功能一致。
使用 context 来传递 theme 变量信息，其中包括 theme 的值和 setTheme 函数。
在 Rainbow 组件内使用 consumer 获取 theme.value 的值，然后设置 className 。
在 Btns 组件内使用 consumer 获取 theme.setTheme 函数，然后通过这个函数来修改 App 组件中的 state.theme.value 。
这里变量用的依旧是 css 自带的变量。
**技能点：**
react 组件、context