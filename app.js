Vue.component('hapus',{
    template: '\
            <button class="btn btn-danger" v-on:click="$emit(\'remove\')">Delete</button>\
    '
})
new Vue({
    el : '#app',
    data() {
        return {
            todos:[],
            todo:''
        }
    },
    methods: {
        addTodo(){
            if (this.todo.trim()) {
                this.todos.push(this.todo);
                this.todo='';
            }
        },
        delete(index){
            this.$delete(this.todos, index);
        },
        loadLocalStorage(){
            const ls = JSON.parse(localStorage.getItem('todos'));
            console.log(ls);
            if (ls == null) {
                return;
            }
            this.todos = ls;
            console.log(this.todos);
        }
    },
    create(){
        this.loadLocalStorage();
    },
    watch: {
        todos(){
            localStorage.setItem('todos',JSON.stringify(this.todo));
        }
    }
});
