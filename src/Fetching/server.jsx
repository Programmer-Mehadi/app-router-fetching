// server side fetching all
function fetchTodos() {
  const res = fetch("https://jsonplaceholder.typicode.com/todos");
  const data = res.json();
  return data;
}

export async function Page() {
  const todoList = await fetchTodos();
  return <div></div>;
}

// server side fetching single
function fetchTodo(id) {
  const res = fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  const data = res.json();
  return data;
}

export async function Page2({ params: { id } }) {
  const todoList = await fetchTodo(id);
  return <div></div>;
}
