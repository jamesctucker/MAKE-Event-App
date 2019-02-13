import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* fetchAttendees() {
    try {
        const response = yield axios.get(`/api/events`);
        console.log(response);
        yield put({ type: 'SET_ATTENDEES', payload: response.data });
    } catch (error) {
        console.log(`error in fetchAttendees`, error);
        alert('something went wrong');
    }
}

function* dashboardSaga() {
    yield takeLatest('FETCH_ATTENDEES', fetchAttendees);
}

export default dashboardSaga;