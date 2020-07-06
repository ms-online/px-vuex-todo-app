<template>
  <div>
    <h3>添加内容</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input
          type="text"
          placeholder="请输入待办事项..."
          name="title"
          v-model="title"
        />
        <input type="submit" value="提交" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit() {
      //分发action
      this.addTodo(this.title);
    },
  },
};
</script>

<style>
form {
  display: flex;
}

input[type='text'] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: none;
}

input[type='submit'] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
