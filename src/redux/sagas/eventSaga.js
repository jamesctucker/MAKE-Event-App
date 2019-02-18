import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEvents() {
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

function* deleteEvent(action) {
    try {
        yield axios.delete(`/api/events/${action.payload}`);
        yield put({ type: "FETCH_EVENTS" });
    }
    catch (error) {
        yield console.log('error deleteEvents saga', error);
    }
}

function* registerForEvent(action) {
    try {
        yield axios.post('/api/events/register', action.payload);
        const nextAction = { type: 'FETCH_EVENTS' };
        yield put(nextAction);
    }
    catch (error) {
        yield console.log('error in registerForEvent saga', error);
    }
}

function* eventSaga() {
    yield takeLatest('FETCH_EVENTS', fetchEvents);
    yield takeLatest('CREATE_EVENT', createEvent);
    yield takeLatest('DELETE_EVENT', deleteEvent);
    yield takeLatest('REGISTER_FOR_EVENT', registerForEvent);

}

export default eventSaga;