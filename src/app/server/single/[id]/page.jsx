async function getTodo(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return data;
}

export default async function ServerSinglePage({ params: { id } }) {
  const todo = await getTodo(id);
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.body}</p>
    </div>
  );
}
