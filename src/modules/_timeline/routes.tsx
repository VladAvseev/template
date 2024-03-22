import { Route } from "react-router-dom"
import { dependency } from "./_dependency/routes"
import { main } from "./_main/routes"

export function timeline() {
  return (
			<Route>
				{main()}
				{dependency()}		
			</Route>
  )
}
