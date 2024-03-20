import { Route } from "react-router-dom"
import { create } from "./_create/routes"
import { edit } from "./_edit/routes"

export function task() {
  return (
			<Route>
				{create()}
				{edit()}			
			</Route>
  )
}
