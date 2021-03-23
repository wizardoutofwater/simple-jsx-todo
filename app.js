let todos = [
  {
    id: 1,
    todo: "Code Epic JSX",
    completed: false,
  },
  {
    id: 2,
    todo: "Learn Epic JSX",
    completed: false,
  },
  {
    id: 3,
    todo: "Learn Props",
    completed: true,
  },
];

let idCount = 3;

let TodoItem = (props) => {
  return (
    <div>
      <li>{props.todo}</li>
      <input type="checkbox" />
    </div>
  );
};

let TodoList = () => {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo.todo} />;
      })}
    </ul>
  );
};

// let TodoList = () => {
//     return (
//         <ul>
//             {todos.map(todo => (
//             <li key={todo.id}>{todo.todo}</li>
//             ))}
//         </ul>
//     );
// }

let TodoAddTodo = () => {
  function handleClick(event) {
    event.preventDefault();

    console.log("I was clicked");
    console.log(event.target.todo.value);
    todos = [
      ...todos,
      {
        todo: event.target.todo.value,
        id: ++idCount,
        completed: false,
      },
    ];
    console.log(todos);
  }

  function handleChange(); // ?? not sure if this is the way to go

  return (
    <span>
      <form onSubmit={handleClick}>
        <input onChange={handleChange} type="text" name="todo" value={this.state.change}></input>
        <button type="submit">Add new todo</button>
      </form>
    </span>
  );
};

let TodoListApp = () => {
  return (
    <span>
      <TodoList />
      <TodoAddTodo />
    </span>
  );
};

ReactDOM.render(<TodoListApp />, document.getElementById("root"));
