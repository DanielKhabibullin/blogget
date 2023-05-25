import Header from './components/Header';
import Main from './components/Main';
import {useToken} from './hooks/useToken';

function App() {
	const [token, removeToken] = useToken('');

	return (
		<>
			<Header token={token} removeToken={removeToken}/>
			<Main />
		</>
	);
}

export default App;
