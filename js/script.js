import {todo} from './data.js';

const {createApp} = Vue;

createApp({
    data(){
        return{
            todo: todo
        }
    },
    methods:{
        
    },
    mounted(){
        //console.log(this.todo);
    }
}).mount('#app');