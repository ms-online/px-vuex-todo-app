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
    commit('newTodo', response.data);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
