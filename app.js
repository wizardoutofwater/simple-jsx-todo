let todos = [
    {
        id: 1,
        todo: 'Code Epic JSX',
        completed: false
    },
    {
        id: 2,
        todo: 'Learn Epic JSX',
        completed: false
    },
    {
        id: 3,
        todo: 'Learn Props',
        completed: true
    }
];

let TodoItem = () => {
    return (<span>Render single todo item</span>)
}

let TodoList = () => {
    return (<span>Render all todo items from todo list</span>)
}

let TodoAddTodo = () => {
    function handleClick() {
        console.log('I was clicked');
    }

    return (<span><form onSubmit={handleClick}><button type="submit">Add new todo</button></form></span>)
}

let TodoListApp = () => {
    return (<span>
        <TodoAddTodo />
    </span>)
}


ReactDOM.render(<TodoListApp />, document.getElementById('root'))