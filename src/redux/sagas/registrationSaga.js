import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRegisteredEvents() {
    try {
        const response = yield axios.get('/api/events/get-registered-events');
        const nextAction = { type: 'SET_EVENT_REGISTRATION', payload: response.data };
        yield put(nextAction);
    } catch (error) {
        console.log('Error with gettings events saga.');
    }
}

function* unRegisterEvent(action) {
    try {
        yield axios.delete(`/api/unregister/${action.payload}`);
        yield put({ type: "FETCH_REGISTERED_EVENTS" });
    }
    catch (error) {
        yield console.log('error unRegister saga', error);
    }
}

function* registrationSaga() {
    yield takeLatest('FETCH_REGISTERED_EVENTS', fetchRegisteredEvents);
    yield takeLatest('UNREGISTER_FROM_EVENT', unRegisterEvent);
}

export default registrationSaga;