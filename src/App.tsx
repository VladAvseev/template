import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ErrorPage } from './modules/_error';
import { dashboard } from "./modules/_dashboard/routes";
import { task } from "./modules/_task/routes";
import { timeline } from "./modules/_timeline/routes";
import './styles.css';
import { Header } from "./components/Header";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
	container: {
		margin: '60px 0 0 0',
	}
}))

function App() {
	const styles = useStyles();
	return (
		<>
		<Header />
		<div className={styles.container}>
			<BrowserRouter>
				<Routes>
					{dashboard()}
					{task()}
					{timeline()}
					<Route path="*" element={<ErrorPage />} />			
				</Routes>
			</BrowserRouter>
		</div>
		</>
  )
}

export default App
