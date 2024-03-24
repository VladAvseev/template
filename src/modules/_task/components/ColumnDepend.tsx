import React from "react"
import { TDependTaskComponent } from "./DependTaskComponent"
import { TDependTaskInstance } from "../_create/models/dependsTask"

type props = {
    tasks: TDependTaskInstance[]
  }

export const ColumnDepend: React.FC<props> = (props) => {
    return (
        <span>
            <div>
                { props.tasks.map((task) => <TDependTaskComponent key={task.id} task={task} />)}
            </div>
        </span>
    )
}