import React from "react";
import { TaskContext } from "../../App";
import Header from "../Header/Header";

class PendingTask extends React.Component {
  render() {
    return (
      <TaskContext.Consumer>
        {context => {
          const pendingTask = context.tasks.filter(task => !task.status);
          return (
            <div>
              <Header />
              {pendingTask.map(task => (
                <div key={task.id} className="pending">
                  {task.description}
                </div>
              ))}
            </div>
          );
        }}
      </TaskContext.Consumer>
    );
  }
}

export default PendingTask;
