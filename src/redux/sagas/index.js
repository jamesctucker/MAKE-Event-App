import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';
import userSaga from './userSaga';
import dashboardSaga from './dashboardSaga';
import eventSaga from './eventSaga';
import miscDataSaga from './miscDataSaga';
import registrationSaga from './registrationSaga';



// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    miscDataSaga(),
    dashboardSaga(),
    eventSaga(),
    loginSaga(),
    registerSaga(),
    userSaga(),
    registrationSaga(),
  ]);
}
