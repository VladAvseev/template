import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ErrorPage } from './modules/_error';
import { dashboard } from "./modules/_dashboard/routes";
import { task } from "./modules/_task/routes";
import { timeline } from "./modules/_timeline/routes";

function App() {
  return (
		<BrowserRouter>
			<Routes>
				{dashboard()}
				{task()}
				{timeline()}
				<Route path="*" element={<ErrorPage />} />			
			</Routes>
		</BrowserRouter>
  )
}

export default App
