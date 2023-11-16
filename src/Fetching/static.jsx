// static side fetching all
async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

export async function Page() {
  const todoList = await fetchTodos();
  return <div></div>;
}

// static side fetching single
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return todos.map((todo) => ({
    id: todo.id.toString(),
  }));
}

async function fetchTodo(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  const data = await res.json();
  return data;
}

export async function Page2({ params: { id } }) {
  const todoList = await fetchTodo(id);
  return <div></div>;
}
