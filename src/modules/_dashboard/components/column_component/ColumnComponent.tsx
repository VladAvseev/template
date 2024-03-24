import { Paper, Typography } from "@mui/material"
import React from "react"
import { TaskComponent } from "../task_component/TaskComponent"
import c from "./ColumnComponent.module.css"
import { TStatusInstance } from "../../models/status"

type props = {
    status: TStatusInstance
  }

export const ColumnComponent: React.FC<props> = ({ status }) => {
    const statusTranslations = {
        "to_do": "Запланировано",
        "in_progress": "В процессе",
        "done": "Выполнено"
    }

    return (
        <Paper className={c.columnComponent} elevation={5}>
            <Typography style={{ textAlign: "center", marginBottom: 10 }}>{statusTranslations[status.status_name]}</Typography>
            <div>
                {status.tasks.map(task => <TaskComponent key={task.id} task={task} />)}
            </div>
        </Paper>
    )
}
