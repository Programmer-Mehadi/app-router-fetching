import Link from "next/link";

async function getAllTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

export default async function ServerAllPage() {
  const todoList = await getAllTodo();
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <Link href={`/server/single/${todo.id}`}>{todo.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
