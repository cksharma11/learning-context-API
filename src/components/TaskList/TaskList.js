import React from "react";

const TaskList = props => {
  return <div>{props.tasks.map(task => <div>{task.description}</div>).reverse()}</div>;
};

export default TaskList;
