import "../../style/app.scss";
import { DeleteTaskButton } from "../client/client";
export const TodoItem = ({ title, desc ,id}) => {
  return (
    <div>
      <div
        className="todo"
        style={{
          border: "solid 2px grey",
          background: "aliceblue",
          width: "80%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
          <div
            style={{
              position: "absolute",
              right: "20%",
            }}
          >
            <DeleteTaskButton id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
};
