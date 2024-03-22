import { Route } from "react-router-dom"
import { dependency } from "./_dependency/routes"

export function timeline() {
  return (
			<Route>
				{main()}
				{dependency()}		
			</Route>
  )
}
