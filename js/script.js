import {todo} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return{
            todo: todo
        }
    },
    methods:{
        removeItem(id){
            const i = this.todo.findIndex((el)=> el.id === id);
            if(i!== -1){
                this.todo.splice(i, 1);
            }
        }
    },
    mounted(){
        //console.log(this.todo);
    }
}).mount('#app');