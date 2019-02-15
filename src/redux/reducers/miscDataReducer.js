import { combineReducers } from 'redux';

const genders = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENDERS':
            return action.payload;
        default:
            return state;
    }
}

const countries = (state = [], action) => {
    switch (action.type) {
        case 'SET_COUNTRIES':
            return action.payload;
        default:
            return state;
    }
}


export default combineReducers({
    genders,
    countries,
});