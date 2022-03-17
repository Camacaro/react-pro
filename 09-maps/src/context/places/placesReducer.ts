

export const placesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PLACES':
      return {
        ...state,
        places: action.places
      }
    case 'ADD_PLACE':
      return {
        ...state,
        places: [...state.places, action.place]
      }
    default:
      return state;
  }
}