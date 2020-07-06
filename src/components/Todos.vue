<template>
  <div>
    <h3>待办事项</h3>
    <div class="legend">
      <span>双击表示完成</span>
      <span><span class="uncomplete-box"></span> = 未完成</span>
      <span><span class="complete-box"></span> = 已完成</span>
    </div>
    <div class="todos">
      <div
        class="todo"
        v-for="(todo, index) in AllTodos"
        :key="index"
        @dblclick="onDblClick(todo)"
        :class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Todos',
  computed: mapGetters(['AllTodos']),
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updatedTodo']),
    onDblClick(todo) {
      //   console.log(todo);
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updatedTodo(updatedTodo);
    },
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background-color: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  text-align: center;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35395e;
}
.uncomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35395e;
  color: #fff;
}

@media (max-width: 500px) {
  .legend {
    grid-template-columns: 1fr;
  }
}
</style>
