import React from "react";

const TaskList = props => {
  return (
    <div>
      {props.tasks
        .map(task => (
          <div
            key={task.id}
            id={task.id}
            onClick={props.toggleTask}
            className={task.status ? "completed" : "pending"}
          >
            {task.description}
          </div>
        ))
        .reverse()}
    </div>
  );
};

export default TaskList;
