import { Route } from "react-router-dom"
import { MainTimelinePage } from "."

export function main() {
  return (
			<Route>
				<Route path="/main_timeline" element={<MainTimelinePage />} />			
			</Route>
  )
}
