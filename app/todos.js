import { TodoItem } from "@/components/server/ServerComponent";
import axios from "axios";
import React from "react";

const fetchTask = async () => {
  const data = await axios.get("http://localhost:3000/api/gettask");
  console.log("data", data.data.data);
  return data.data.data;
};

async function Todos() {
  const userTasks = await fetchTask();
  return (
    <div>
      {userTasks
        ? userTasks.map((item, index) => (
            <TodoItem
              title={item.title}
              desc={item.desc}
              id={item.id}
              key={index}
            />
          ))
        : null}
    </div>
  );
}

export default Todos;
