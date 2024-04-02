import {todo} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return{
            todo: todo,
            itemText: ''
        }
    },
    methods:{
        removeItem(id){
            const i = this.todo.findIndex((el)=> el.id === id);
            if(i!== -1){
                this.todo.splice(i, 1);
            }
        },
        addTodo(){
            const newObj = {
                id: null,
                text: this.itemText,
                done: false
            }
            let nextId = 0;
            this.todo.forEach((el) => {
                if(nextId < el.id){
                    nextId = el.id;
                }
            });
            newObj.id = nextId + 1;
            this.todo.push(newObj);
            this.itemText = '';
            //console.log(this.todo);
        }
    },
    mounted(){
        //console.log(this.todo);
    }
}).mount('#app');