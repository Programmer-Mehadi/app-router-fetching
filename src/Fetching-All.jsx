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

// client side fetching all
import { useEffect, useState } from "react";
export function Client() {
  const [data, setData] = useState([]);
  async function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(async (res) => await res.json())
      .then((data) => setData(data));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
}
// client side fetching single
import { useEffect, useState } from "react";
export function Client() {
  const [data, setData] = useState([]);
  async function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(async (res) => await res.json())
      .then((data) => setData(data));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
}

// static side fetching
