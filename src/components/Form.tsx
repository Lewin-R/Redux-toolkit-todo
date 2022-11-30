import { FC, useId, useState } from "react";
import { addOneTodo } from "../store/entities/todo.entity";
import { useAppDispatch } from "../store/store";

export const Form: FC = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);

  const id = useId();
  const dispatch = useAppDispatch();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(
      addOneTodo({
        title: title,
        priority: priority,
        isDone: false,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <label htmlFor={id + "__title"}>Title</label>
        <div className="input-group mb-3">
          <input
            id={id + "__title"}
            className="form-control"
            type="text"
            placeholder="Enter a title ..."
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <label htmlFor={id + "__priority"}>Priority</label>
        <div className="input-group mb-3">
          <input
            id={id + "__priority"}
            className="form-control"
            type="number"
            min="1"
            max="5"
            placeholder="Enter a priority from 1 - 5 ..."
            onChange={(event) => setPriority(Number(event.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Task
        </button>
      </div>
    </form>
  );
};
