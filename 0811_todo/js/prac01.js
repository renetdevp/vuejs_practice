// 바로 Vue 객체를 생성하면 #todo-app을 못찾아서 객체들이 다 로드된 후에 Vue 객체 생성
window.onload = function (){
    Vue.component('todo-head', {
        template: '<div id="todo-head"><p>Todo-List</p></div>'
    });
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}<button @click="deleted(todo.id)">del</button></li>',
        methods: {
            deleted: (id)=>{
                let todoList = app.todoList;
                console.log(`${id} ${todoList[id].text} del`);
                todoList.splice(id, 1);
                for (i=id; i<app.todoList.length; i++){
                    todoList[i].id -= 1;
                }
            }
        }
    });

    var app = new Vue({
        el: '#todo-app',
        data: {
            todoList: [
                { id: 0, text: 'heroes' },
                { id: 1, text: 'of' },
                { id: 2, text: 'the' },
                { id: 3, text: 'storm' }
            ]
        }
    });
};