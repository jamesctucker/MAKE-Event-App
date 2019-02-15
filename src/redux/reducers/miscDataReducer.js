const genders = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENDERS':
            return action.payload;
        default:
            return state;
    }
}


export default genders;