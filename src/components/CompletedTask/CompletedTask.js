import React from "react";
import { TaskContext } from "../../App";
import Header from "../Header/Header";

class CompletedTask extends React.Component {
  render() {
    return (
      <TaskContext.Consumer>
        {context => {
          const completedTasks = context.tasks.filter(task => task.status);
          return (
            <div>
              <Header />
              {completedTasks.map(task => (
                <div key={task.id} className="completed">{task.description}</div>
              ))}
            </div>
          );
        }}
      </TaskContext.Consumer>
    );
  }
}

export default CompletedTask;
