// this reducer stores info regarding which users are admins
const admin = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADMIN':
      return action.payload;
    default:
      return state;
  }
};



// user will be on the redux state at:
// state.user
export default admin;
