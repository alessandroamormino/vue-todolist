const { createApp } = Vue

createApp({
  data() {
    return {
      todos : [
        {
            text: 'Comprare il latte',
            done: false,
        },
        {
            text: 'Comprare il pane',
            done: false,
        },
        {
            text: 'Pulire casa',
            done: false,
        },
        {
            text: 'Fare benzina',
            done: false,
        },
      ], 
      styleToDo: {
        color: 'red',
        textDecoration: 'line-through',
      },
    }
  }, 

  methods: {
    isDone(toDoIndex){
        if(this.todos[toDoIndex].done){
            this.todos[toDoIndex].done = false;
        } else{
            this.todos[toDoIndex].done = true;
        }
    },

    removeToDo(toDoIndex){
        this.todos.splice(toDoIndex, 1);
    }
  },

}).mount('#app')