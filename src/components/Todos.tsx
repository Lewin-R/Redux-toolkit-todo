import { FC } from "react";
import { Todo } from "./Todo";
import { mockDataTodos } from "../mock-data";
import { TodoModel } from "../TodoModel";
import { useAppSelector } from "../store/store";
import { selectAllTodos } from "../store/states/todos.selectors";

export const Todos: FC = () => {
  //const todos: TodoModel[] = mockDataTodos; // TODO: Use selector here
  const todos: TodoModel[] = useAppSelector(selectAllTodos);

  return (
    <table className="table" style={{ marginTop: "25px" }}>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <Todo
            key={todo.title + index}
            priority={todo.priority}
            title={todo.title}
            isDone={todo.isDone}
            position={index + 1}
            entityId={todo.title}
          />
        ))}
      </tbody>
    </table>
  );
};
