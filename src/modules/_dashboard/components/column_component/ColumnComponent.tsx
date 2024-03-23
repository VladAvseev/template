import { Paper } from "@mui/material"
import React from "react"
import { TTaskInstance } from "../../models/task"
import { TaskComponent } from "../task_component/TaskComponent"
import c from "./ColumnComponent.module.css"

type props = {
    tasks: TTaskInstance[]
  }

export const ColumnComponent: React.FC<props> = (props) => {
    return (
        <Paper>
            <div className={c.ColumnComponent}>
                { props.tasks.map((task) => <TaskComponent key={task.id} task={task} />)}
            </div>
        </Paper>
    )
}