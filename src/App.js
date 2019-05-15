import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TaskHome from "./components/TaskHome/TaskHome";

const TaskContext = React.createContext({});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { description: "Task 1" },
        { description: "Task 2" },
        { description: "Task 3" },
        { description: "Task 4" },
        { description: "Task 5" },
        { description: "Task 6" }
      ],
      defaultTask: ""
    };
  }

  addTask() {
    const tasks = this.state.tasks;
    tasks.push({ description: this.state.defaultTask });
    this.setState({ tasks });
  }

  updateTask(event) {
    this.setState({ defaultTask: event.target.value });
  }

  render() {
    return (
      <TaskContext.Provider
        value={{
          tasks: this.state.tasks,
          addTask: this.addTask.bind(this),
          updateTask: this.updateTask.bind(this)
        }}
      >
        <BrowserRouter>
          <Route path="/" component={TaskHome} />
        </BrowserRouter>
      </TaskContext.Provider>
    );
  }
}

export { App, TaskContext };
