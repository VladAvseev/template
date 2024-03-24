import { Route } from "react-router-dom"
import { CreateTaskPage } from "."

export function create() {
  return (
			<Route>
				<Route path="/create_task" element={<CreateTaskPage />} />			
			</Route>
  )
};
