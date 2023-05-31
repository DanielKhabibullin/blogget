import Header from './components/Header';
import Main from './components/Main';
import {useDispatch} from 'react-redux';
import {getToken} from './api/token';
import {updateToken} from './store/token/tokenAction';

function App() {
	const dispatch = useDispatch();
	dispatch(updateToken(getToken()));

	return (
		<>
			<Header />
			<Main />
		</>
	);
}
// TODO arrow function
export default App;
