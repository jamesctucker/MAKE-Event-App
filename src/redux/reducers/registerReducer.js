// stores which users signed up for what events
const registered = (state = [], action) => {
    switch (action.type) {
        case 'SET_REGISTERED':
            return action.payload;
        default:
            return state;
    }
}
export default registered;