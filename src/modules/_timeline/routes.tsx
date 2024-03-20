import { Route } from "react-router-dom"
import { TimelinePage } from "."

export function timeline() {
  return (
			<Route>
				<Route path="/timeline" element={<TimelinePage />} />			
			</Route>
  )
}
