const initalState = {
    repos: [],
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
      case 'SET_REPOS':
        return Object.assign(
            {},
            state,
            {
                repos: action.repos,
            },
        );
      default:
        return state;
    }
  }
  
  export default reducer