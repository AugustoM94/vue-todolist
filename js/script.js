const { createApp } = Vue;

createApp({
  data() {
    return {
     
      todos: [
        {
          id: 1,
          text: "Svegliarsi al mattino ",
          done: false,
        },
        {
          id: 2,
          text: "Fare la colazione",
          done: true,
        },
        {
          id: 3,
          text: "Fare lezione",
          done: false,
        },
        {
            id: 4,
            text: "Pranzare",
            done: true,
          },
          {
            id: 5,
            text: "Fare esercizio",
            done: false,
          },
      ],
      todoText: "",
      lastId: 5,
    };
  },
  methods: {
    addTodo() {
        this.lastId++;
        const newTask = {
          id: this.lastId,
          text: this.todoText,
          done:false
        }
        this.todos.push(newTask);
        this.todoText = ''
    },
    removeTodo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    doneTik(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
          todo.done = !todo.done
        }
      },
  },
}).mount('#app');
