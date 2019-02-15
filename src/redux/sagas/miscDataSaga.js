import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchGenders() {
    try {
        const response = yield axios.get(`/api/data/get-genders`);
        console.log(response);
        yield put({ type: 'SET_GENDERS', payload: response.data });
    } catch (error) {
        console.log(`error in fetchGenders`, error);
        alert('something went wrong');
    }
}

function* fetchCountries() {
    try {
        const response = yield axios.get(`/api/data/get-countries`);
        console.log(response);
        yield put({ type: 'SET_COUNTRIES', payload: response.data });
    } catch (error) {
        console.log(`error in fetchCountries`, error);
        alert('something went wrong');
    }
}



function* miscDataSaga() {
    yield takeLatest('FETCH_GENDERS', fetchGenders);
    yield takeLatest('FETCH_COUNTRIES', fetchCountries);

}

export default miscDataSaga;