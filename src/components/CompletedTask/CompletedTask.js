import React from "react";
import { TaskContext } from "../../App";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";

class CompletedTask extends React.Component {
  render() {
    return (
      <TaskContext.Consumer>
        {context => {
          const completedTasks = context.tasks.filter(task => task.status);
          return (
            <div>
              <Header />
              <TaskList tasks={completedTasks} />
            </div>
          );
        }}
      </TaskContext.Consumer>
    );
  }
}

export default CompletedTask;
