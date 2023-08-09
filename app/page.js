import AddTodoListForm from "./addTodoListForm";
import { TodoItem } from "../components/server/ServerComponent";
import axios from "axios";
import { Suspense } from "react";
import Todos from "./todos";
export default async function Home() {
  return (
    <div>
      <AddTodoListForm />
      <Suspense fallback={<div>Loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
}
