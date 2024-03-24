import React from "react"
import c from "./TaskComponent.module.css"
import { TTaskInstance } from "../../models/task"
import { Avatar, Chip, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { WarningIcon } from "../../../../components/WarningIcon"

type props = {
  task: TTaskInstance
}

export const TaskComponent: React.FC<props> = ({ task }) => {
  return (
    <Link to={`/edit_task/${task.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Paper className={c.taskComponent}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
          <Typography><strong>{task.title}</strong></Typography>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between', gap: '2px' }}>
            {task.warnings.map((warning) => <WarningIcon key={Math.random() + Math.random()} type={warning.type} task_id={warning.task_id} />)}
          </div>
        </div>
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
    </Link>
  )
}