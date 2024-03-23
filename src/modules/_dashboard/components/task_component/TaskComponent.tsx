import React from "react";
import c from "./TaskComponent.module.css"
import { TTaskInstance } from "../../models/task";
import { Avatar, Chip, Paper, Typography } from "@mui/material";

type props = {
  task: TTaskInstance
}

export const TaskComponent: React.FC<props> = ({ task }) => {
  return (
    <Paper className={c.taskComponent}>
      <Typography><strong>{task.title}</strong></Typography>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
        <Chip
          label={task.responsible.username}
          size="small"
          style={{ marginRight: '10px' }}
          avatar={<Avatar>A</Avatar>}
        />
        <Typography>{task.deadline}</Typography>
      </div>
    </Paper>
  )
}