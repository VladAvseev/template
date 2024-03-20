import { Route } from "react-router-dom"
import EditTaskPage from "."

export function create() {
  return (
			<Route>
				<Route path="/create_task" element={<EditTaskPage />} />			
			</Route>
  )
}
