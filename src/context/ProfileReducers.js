export default (state, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          users: [action.payload, ...state.users]
        }
      default:
        return state;
    }
}