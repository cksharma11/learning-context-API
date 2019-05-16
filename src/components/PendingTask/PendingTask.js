import React from "react";
import { TaskContext } from "../../App";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";

class PendingTask extends React.Component {
  render() {
    return (
      <TaskContext.Consumer>
        {context => {
          const pendingTasks = context.tasks.filter(task => !task.status);
          return (
            <div>
              <Header />
              <TaskList tasks={pendingTasks} />
            </div>
          );
        }}
      </TaskContext.Consumer>
    );
  }
}

export default PendingTask;
