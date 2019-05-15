import React from "react";
import Header from "../Header/Header";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import { TaskContext } from "../../App";

export default class TaskHome extends React.Component {
  render() {
    return (
      <TaskContext.Consumer>
        {context => (
          <div>
            <Header />
            <AddTask
              addTask={context.addTask}
              defaultTask={context.defaultTask}
              updateTask={context.updateTask}
            />
            <TaskList tasks={context.tasks} />
          </div>
        )}
      </TaskContext.Consumer>
    );
  }
}
