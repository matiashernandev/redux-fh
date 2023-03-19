import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "./store/slices/counter/";

function App() {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<div className="card">
				<h2>count is {counter}</h2>
				<button onClick={() => dispatch(increment())}>increment</button>
				<button onClick={() => dispatch(decrement())}>decrement</button>
				<button onClick={() => dispatch(incrementBy(5))}>incrementBy</button>
			</div>
		</div>
	);
}

export default App;
