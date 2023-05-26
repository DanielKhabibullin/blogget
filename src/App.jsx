import Header from './components/Header';
import Main from './components/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';

function App() {
	return (
		<TokenContextProvider>
			<AuthContextProvider>
				<Header />
				<PostsContextProvider>
					<Main />
				</PostsContextProvider>
			</AuthContextProvider>
		</TokenContextProvider>
	);
}

export default App;
