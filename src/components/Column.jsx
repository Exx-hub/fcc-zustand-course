import useTaskStore from "../store/zustand";
import "./Column.css";
import Task from "./Task";
import { shallow } from "zustand/shallow";

// eslint-disable-next-line react/prop-types
function Column({ stateTitle }) {
  const tasks = useTaskStore(
    (state) => state.tasks.filter((item) => item.state === stateTitle),
    shallow
  );

  const addTask = useTaskStore((state) => state.addTask);

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{stateTitle}</p>
        <button onClick={() => addTask("2nd", stateTitle)}>Add</button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} key={`${task.title}-${Math.random().toFixed(2)}`} />
      ))}
    </div>
  );
}

export default Column;
