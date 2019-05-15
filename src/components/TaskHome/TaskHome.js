import React from "react";
import Header from "../Header/Header";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";

export default class TaskHome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddTask />
        <TaskList tasks={[{ description: "A" }, { description: "B" }]} />
      </div>
    );
  }
}
