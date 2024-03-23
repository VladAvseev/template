import React from "react";
import c from "./TaskComponent.module.css"
import { TTaskInstance } from "../../models/task";

type props = {
  task: TTaskInstance
}

export const TaskComponent: React.FC<props> = ({ task }) => {
  return (
    <div className={c.taskComponent}>
      <strong>{task.title}</strong>
      <p>Дедлайн: {task.deadline.toString()}</p>
    </div>
  )
}