import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/slices/counter/";

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<div className="card">
				<button onClick={() => dispatch(increment())}>
					count is {counter}
				</button>
			</div>
		</div>
	);
}

export default App;
