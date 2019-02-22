const eventRegistration = (state = [], action) => {
    switch (action.type) {
        case 'SET_EVENT_REGISTRATION':
            return action.payload;
        default:
            return state;
    }
}
export default eventRegistration;