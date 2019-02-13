import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEvents(action) {
    try {
        const response = yield axios.get('/api/events/get-events');
        const nextAction = { type: 'SET_EVENTS', payload: response.data };
        yield put(nextAction);
    } catch (error) {
        console.log('Error with gettings events saga.');
    }
}

function* createEvent(action) {
    try {
        yield axios.post('/api/events', action.payload);
        const nextAction = { type: 'FETCH_EVENTS' };
        yield put(nextAction);
    }
    catch (error) {
        yield console.log('error in addProject saga', error);
    }
}

function* eventSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvents);
    yield takeLatest('CREATE_EVENT', createEvent);

}

export default eventSaga;