import React from "react";
import c from "./TaskComponent.module.css"
import { TTaskInstance } from "../../models/task";
import { Paper } from "@mui/material";

type props = {
  task: TTaskInstance
}

export const TaskComponent: React.FC<props> = ({ task }) => {
  return (
    <Paper className={c.taskComponent}>
      <strong>{task.title}</strong>
      <p>Дедлайн: {task.deadline}</p>
    </Paper>
  )
}