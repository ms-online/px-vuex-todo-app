# vuex-todo-app

## lesson2 配置 vuex 和请求数据。

步骤：

1. state 里面设置数据验证；
2. getters 里面获取数据；
3. todosvue 里面 import 内容 mapGetters，通过 computed 得到 getter 的函数。
4. aciton 里面请求数据，需要注意异步执行函数，得到数据后 commit 到 mutation，mutation 操作 state 的数据状态进行更新。
5. 在 todovue 里面 methods 方法调用 mapActions 里面的 fetch 函数，同时为了保证在加载完成前获取数据，使用 created 钩子函数自执行。this.fetchTodos
