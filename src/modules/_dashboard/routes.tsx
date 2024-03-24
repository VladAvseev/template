import { Route } from "react-router-dom"
import { DashboardPage } from "."

export function dashboard() {
  return (
	<Route>
		<Route path="/dashboard" element={<DashboardPage />} />			
	</Route>
  )
}
