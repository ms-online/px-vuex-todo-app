const state = {
  todos: [],
};

const getters = {
  AllTodos: (state) => state.todos,
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },

  newTodo: (state, todo) => {
    state.todos.unshift(todo);
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};

const actions = {
  // 获取todo
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/todos'
    );
    // console.log(response);
    commit('setTodos', response.data);
  },

  // 添加todo
  async addTodo({ commit }, title) {
    const response = await axios.post(
      'http://jsonplaceholder.typicode.com/todos',
      { title, complete: false }
    );
    console.log(response.data);
    commit('newTodo', response.data);
  },
  // 删除todo
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
    commit('removeTodo', id);
  },
  // 过滤todo
  async filterTodos({ commit }, count) {
    console.log(count);
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/todos/?_limit=${count}`
    );
    commit('setTodos', response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
