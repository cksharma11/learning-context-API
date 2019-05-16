import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TaskHome from "./components/TaskHome/TaskHome";
import CompletedTask from "./components/CompletedTask/CompletedTask";
import PendingTask from "./components/PendingTask/PendingTask";
import './App.css'
const TaskContext = React.createContext({});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, description: "Task 1", status: false },
        { id: 2, description: "Task 2", status: false },
        { id: 3, description: "Task 3", status: false },
        { id: 4, description: "Task 4", status: false },
        { id: 5, description: "Task 5", status: false },
        { id: 6, description: "Task 6", status: false }
      ],
      defaultTask: ""
    };
  }

  addTask() {
    const tasks = this.state.tasks;
    const newID = tasks.length + 1;
    tasks.push({ id: newID, status: false, description: this.state.defaultTask });
    this.setState({ tasks });
  }

  updateTask(event) {
    this.setState({ defaultTask: event.target.value });
  }

  toggleTask(event) {
    const taskId = +event.target.id;
    const tasks = this.state.tasks;
    const selectedTaskIndex = tasks.findIndex(task => task.id === taskId);
    tasks[selectedTaskIndex].status = !tasks[selectedTaskIndex].status;
    this.setState({tasks});
  }

  render() {
    return (
      <TaskContext.Provider
        value={{
          tasks: this.state.tasks,
          addTask: this.addTask.bind(this),
          updateTask: this.updateTask.bind(this),
          toggleTask: this.toggleTask.bind(this)
        }}
      >
        <BrowserRouter>
          <Route path="/" exact component={TaskHome} />
          <Route path="/completed" component={CompletedTask} />
          <Route path="/pending" component={PendingTask} />
        </BrowserRouter>
      </TaskContext.Provider>
    );
  }
}

export { App, TaskContext };
