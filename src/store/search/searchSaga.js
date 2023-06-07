import {put, select, takeLatest, call, apply} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import {
	searchRequestError,
	searchRequestSuccess,
	SEARCH_REQUEST
} from './searchAction';

function* fetchSearch(search) {
	const token = yield select(state => state.token.token);
	try {
		const request = yield call(fetch, `${URL_API}/search?q=${search}`, {
			headers: {
				Authorization: `bearer ${token}`,
			}
		});
		const response = yield apply(request, request.json);
		yield put(searchRequestSuccess(response.data));
	} catch (error) {
		yield put(searchRequestError(error));
	}
}
export function* watchSearch() {
	yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
