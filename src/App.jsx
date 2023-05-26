import Header from './components/Header';
import Main from './components/Main';
import {tokenContext} from './context/tokenContext.jsx';
import {AuthContextProvider} from './context/authContext.jsx';
import {useToken} from './hooks/useToken';

function App() {
	const [token, removeToken] = useToken('');

	return (
		<tokenContext.Provider value={{token, removeToken}}>
			<AuthContextProvider>
				<Header />
				<Main />
			</AuthContextProvider>
		</tokenContext.Provider>
	);
}

export default App;
