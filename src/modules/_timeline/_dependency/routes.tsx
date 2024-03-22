import { Route } from "react-router-dom"
import { DependencyTimelinePage } from "."

export function dependency() {
  return (
			<Route>
				<Route path="/dependency_timeline/:id" element={<DependencyTimelinePage />} />			
			</Route>
  )
}
