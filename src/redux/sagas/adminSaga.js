import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchAdmin() {
    try {
        const response = yield axios.get(`/api/user/admin`);
        console.log(response);
        yield put({ type: 'SET_ADMIN', payload: response.data });
    } catch (error) {
        console.log(`error in fetchAdmin`, error);
        alert('something went wrong');
    }
}
function* updateAdmin(action) {
    try {
        yield axios.put(`/api/user/update-admin`, action.payload);
        yield put({ type: "FETCH_ADMIN" });
    }
    catch (error) {
        yield console.log('error updateAdmin saga', error);
    }
}

function* adminSaga() {
    yield takeLatest('FETCH_ADMIN', fetchAdmin);
    yield takeLatest('UPDATE_ADMIN', updateAdmin);

}

export default adminSaga;