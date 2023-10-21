export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return todos.map((todo) => ({
    id: todo.id.toString(),
  }));
}

async function getTodo(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return data;
}

export default async function StaticSinglePage({ params: { id } }) {
  const todo = await getTodo(id);
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.body}</p>
    </div>
  );
}
