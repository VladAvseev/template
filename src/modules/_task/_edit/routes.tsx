import { Route } from "react-router-dom"
import EditTaskPage from "."

export function edit() {
  return (
			<Route>
				<Route path="/edit_task/:id" element={<EditTaskPage />} />			
			</Route>
  )
}
