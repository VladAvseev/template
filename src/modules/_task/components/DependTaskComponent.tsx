import React from "react"
import { TDependTaskInstance } from "../_create/models/dependsTask"
import { Paper } from "@mui/material"
import style from "./DependTaskComponent.module.css"
import VButton from "../../../mvvm/Button/VButton"
import { createTask } from "../_create/models"

type props = {
  task: TDependTaskInstance
}

export const TDependTaskComponent: React.FC<props> = ({ task }) => {
  const {} = createTask
  return (
    <Paper className={style.taskLine}>
      <span className={style.taskDescription}>
      <p className={style.taskName}>id: {task.task_id}</p>
      <h3 className={style.taskName}>Задача: {task.title}</h3>
      <p className={style.taskName}>Связь: {task.type}</p>
      </span>
      
    </Paper>
  )
}