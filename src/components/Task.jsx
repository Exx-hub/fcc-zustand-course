import classNames from "classnames";
import "./Task.css";
import useTaskStore from "../store/zustand";
import { shallow } from "zustand/shallow";

// eslint-disable-next-line react/prop-types
function Task({ title }) {
  const task = useTaskStore((state) => state.tasks.find((item) => item.title === title), shallow);
  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="bottomWrapper">
        <div></div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
}

export default Task;
